import { Upload } from '../../../interfaces/upload.interfaces';

export interface ScriptArg {
  order: number;
  name: string;
  placeholderText: string;
}

export interface Script {
  id: number;
  name: string;
  description: string;
  numArgs: number;
  args: ScriptArg[];
}

export interface ScriptSelectorState {
  loading: boolean;
  scripts: Script[];
  files: Upload[];
}
