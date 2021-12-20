import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AppService } from 'src/app/app.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { defaultFilesState } from '../constants/files-state.constants';
import { FilesState } from '../interfaces/files-state.interfaces';
import { Upload } from '../interfaces/upload.interfaces';
import { UploadsService } from './uploads.service';

@Injectable({
  providedIn: 'root',
})
export class FilesStateService {
  _state = new BehaviorSubject(defaultFilesState);

  constructor(
    private readonly uploadsService: UploadsService,
    private readonly toastService: ToastService,
    private readonly appService: AppService
  ) {}

  state(): Observable<FilesState> {
    return this._state.asObservable();
  }

  currentState(): FilesState {
    return this._state.getValue();
  }

  setState(state: Partial<FilesState>): void {
    this._state.next({
      ...this.currentState(),
      ...state,
    });
  }

  initializeState(): void {
    this.setState({ loading: true, selectedUploads: [] });
    if (this.appService.graphQLEnabled()) {
      this.initializeWithGraphQL();
    } else {
      this.initializeWithRest();
    }
  }

  deleteUploadsGql(uploads: Upload[]): void {
    this.setState({ loading: true });
    this.uploadsService
      .deleteUploadsGql(uploads)
      .pipe(
        tap(() => {
          this.toastService.success('Success', 'Files deleted');
          this.setState({ loading: true });
        }),
        switchMap(() => this.getUploadsGql()),
        tap(result => {
          this.setState({
            uploads: result.data.uploads,
            loading: false,
            selectedUploads: [],
          });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to delete files'))
      )
      .subscribe();
  }

  deleteUploadsRest(uploads: Upload[]): void {
    this.setState({ loading: true });
    this.uploadsService
      .deleteUploadsRest(uploads)
      .pipe(
        tap(() => {
          this.toastService.success('Success', 'Files deleted');
          this.setState({ loading: true });
        }),
        switchMap(() => this.getUploadsRest()),
        tap(uploads => {
          this.setState({
            uploads,
            loading: false,
            selectedUploads: [],
          });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to delete files'))
      )
      .subscribe();
  }

  renameUpload(id: number, newName: string): void {
    this.setState({ loading: true });
    this.uploadsService
      .renameUpload(id, newName)
      .pipe(
        tap(() => {
          this.toastService.success('Success', 'File renamed');
          this.initializeState();
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to rename file'))
      )
      .subscribe();
  }

  private initializeWithGraphQL(): void {
    this.getUploadsGql()
      .pipe(
        tap(result => {
          this.setState({ uploads: result.data.uploads, loading: false });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to load files'))
      )
      .subscribe();
  }

  private initializeWithRest(): void {
    this.getUploadsRest()
      .pipe(
        tap(uploads => {
          this.setState({ uploads, loading: false });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to load files'))
      )
      .subscribe();
  }

  private getUploadsRest(): Observable<Upload[]> {
    return this.uploadsService.getUploadsRest();
  }

  private getUploadsGql(): Observable<
    ApolloQueryResult<{ uploads: Upload[] }>
  > {
    return this.uploadsService.getUploadsGql();
  }

  private catchErrorCallback = (
    toastTitle: string,
    toastMessage: string
  ): (() => Observable<null>) => {
    return () => {
      this.setState({ loading: false });
      this.toastService.error(toastTitle, toastMessage);
      return of(null);
    };
  };
}
