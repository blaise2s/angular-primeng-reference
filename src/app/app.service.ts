import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private useGraphQL = true;

  graphQLEnabled(): boolean {
    return this.useGraphQL;
  }
}
