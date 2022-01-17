import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { QueryObservable } from '../../../interfaces/query-result.interface';
import { Script } from '../interfaces/script-selector-state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor(
    private readonly apollo: Apollo,
    private readonly http: HttpClient
  ) {}

  getScriptsGql(): QueryObservable<{ scripts: Script[] }> {
    return this.apollo.query({
      query: gql`
        query {
          scripts {
            id
            name
            description
            numArgs
            args {
              order
              name
              placeholderText
            }
          }
        }
      `,
    });
  }

  getScriptsRest(): Observable<Script[]> {
    return this.http.get<Script[]>(
      'http://localhost:3000/api/bricz-server/v1/scripts'
    );
  }
}
