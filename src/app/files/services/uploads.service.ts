import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Upload } from '../interfaces/upload.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UploadsService {
  constructor(
    private readonly http: HttpClient,
    private readonly apollo: Apollo
  ) {}

  getUploadsRest(): Observable<Upload[]> {
    return this.http.get<Upload[]>(
      'http://localhost:3000/api/bricz-server/v1/uploads'
    );
  }

  getUploadsGql(): Observable<ApolloQueryResult<{ uploads: Upload[] }>> {
    return this.apollo.watchQuery<{ uploads: Upload[] }>({
      query: gql`
        query {
          uploads {
            id
            destination
            encoding
            fieldname
            filename
            mimetype
            originalname
            path
            size
          }
        }
      `,
    }).valueChanges;
  }

  deleteUploadsRest(uploads: Upload[]): Observable<void> {
    return this.http.delete<void>(
      'http://localhost:3000/api/bricz-server/v1/uploads',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        body: uploads,
      }
    );
  }

  deleteUploadsGql(uploads: Upload[]) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($uploads: [DeleteUploadInput!]!) {
          deleteUploads(uploads: $uploads)
        }
      `,
      variables: { uploads },
    });
  }

  renameUpload(id: number, newName: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($id: Int!, $newName: String!) {
          renameUpload(id: $id, newName: $newName) {
            id
            originalname
          }
        }
      `,
      variables: { id, newName },
    });
  }
}
