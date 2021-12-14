import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
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
    private readonly toastService: ToastService
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
    this.setState({ loading: true });
    this.getUploads()
      .pipe(
        tap(uploads => {
          this.setState({ uploads, loading: false });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to load files'))
      )
      .subscribe();
  }

  deleteUploads(uploads: Upload[]): void {
    this.uploadsService
      .deleteUploads(uploads)
      .pipe(
        tap(() => {
          this.toastService.success('Success', 'Files deleted');
          this.setState({ loading: true });
        }),
        switchMap(() => this.getUploads()),
        tap(uploads => {
          this.setState({ uploads, loading: false, selectedUploads: [] });
        }),
        catchError(this.catchErrorCallback('Failure', 'Failed to delete files'))
      )
      .subscribe();
  }

  private getUploads(): Observable<Upload[]> {
    return this.uploadsService.getUploads();
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
