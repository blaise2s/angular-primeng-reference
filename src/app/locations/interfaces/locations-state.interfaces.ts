import { SalesByState } from '../../common/components/map/interfaces/state.interfaces';

export interface LocationsState {
  loading: boolean;
  salesByState?: SalesByState;
}
