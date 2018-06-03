import { CardEntry } from './card';

export interface ApplicationState {
  deck: CardEntry[];
  table: CardEntry[];
}
