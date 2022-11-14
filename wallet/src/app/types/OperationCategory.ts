export const operationCagegories = ['expense', 'income', 'saving'] as const;

export type OperationCategory = typeof operationCagegories[number];
