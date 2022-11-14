import { operationCagegories, OperationCategory } from './OperationCategory';

export class NewOperation {
  constructor(
    public amount: number = 0,
    public category: OperationCategory = operationCagegories[0]
  ) {}
}
