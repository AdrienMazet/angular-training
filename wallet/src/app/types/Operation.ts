import { operationCagegories, OperationCategory } from './OperationCategory';

export class Operation {
  constructor(
    public amount: number = 0,
    public category: OperationCategory = operationCagegories[0]
  ) {}
}
