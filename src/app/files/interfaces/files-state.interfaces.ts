import { Upload } from '../../common/interfaces/upload.interfaces';

export interface FilesState {
  loading: boolean;
  uploads: Upload[];
  selectedUploads: Upload[];
}
