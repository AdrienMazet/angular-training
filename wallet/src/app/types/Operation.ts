import { OperationCategory } from './OperationCategory';

export type Operation = {
  id: number;
  amount: number;
  category: OperationCategory;
};
