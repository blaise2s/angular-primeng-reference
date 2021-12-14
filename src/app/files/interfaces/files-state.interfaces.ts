import { Upload } from './upload.interfaces';

export interface FilesState {
  loading: boolean;
  uploads: Upload[];
  selectedUploads: Upload[];
}
