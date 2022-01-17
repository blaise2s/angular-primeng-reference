import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  constructor(private readonly apollo: Apollo) {}

  analyze(
    scriptId: number,
    file1Id: number,
    file2Id?: number,
    file3Id?: number
  ) {
    return this.apollo.query<{
      analyze: {
        pos: { [key: string]: number };
        ecomm: { [key: string]: number };
        rollup: {
          [key: string]: {
            pos: number;
            ecomm: number;
            total: number;
            numStores: number;
          };
        };
      };
    }>({
      query: gql`
        query ($scriptId: Int!, $file1Id: Int!, $file2Id: Int, $file3Id: Int) {
          analyze(
            scriptId: $scriptId
            file1Id: $file1Id
            file2Id: $file2Id
            file3Id: $file3Id
          )
        }
      `,
      variables: { scriptId, file1Id, file2Id, file3Id },
    });
  }
}
