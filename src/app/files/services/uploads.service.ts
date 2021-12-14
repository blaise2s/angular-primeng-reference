import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upload } from '../interfaces/upload.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UploadsService {
  constructor(private readonly http: HttpClient) {}

  getUploads(): Observable<Upload[]> {
    return this.http.get<Upload[]>(
      'http://localhost:3000/api/bricz-server/v1/uploads'
    );
  }

  deleteUploads(uploads: Upload[]): Observable<void> {
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
}
