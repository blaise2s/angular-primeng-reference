import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { FeatureCollection } from 'geojson';
import { Observable } from 'rxjs';
import { State } from '../interfaces/state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(
    private readonly apollo: Apollo,
    private readonly http: HttpClient
  ) {}

  getStates(): Observable<ApolloQueryResult<{ states: State[] }>> {
    return this.apollo.query<{ states: State[] }>({
      query: gql`
        query {
          states {
            name
            abv
            latitude
            longitude
          }
        }
      `,
    });
  }

  getStatesGeoJSON(): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(
      'http://localhost:3000/api/bricz-server/v1/states/geoJSON'
    );
  }
}
