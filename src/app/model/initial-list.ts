import { Details } from './pokemon';

export interface InitialList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Details>;
}
