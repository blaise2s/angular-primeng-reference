import { ApolloQueryResult } from '@apollo/client';
import { Observable } from 'rxjs';

export type QueryObservable<T> = Observable<ApolloQueryResult<T>>;
