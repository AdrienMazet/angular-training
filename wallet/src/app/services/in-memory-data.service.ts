import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Operation } from '../types/Operation';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const operations: Operation[] = [
      { id: 0, amount: 35, category: 'expense' },
      { id: 2, amount: 9, category: 'expense' },
      { id: 3, amount: 500, category: 'saving' },
      { id: 4, amount: 1500, category: 'income' },
      { id: 5, amount: 650, category: 'expense' },
      { id: 6, amount: 300, category: 'income' },
      { id: 7, amount: 15, category: 'expense' },
      { id: 8, amount: 1000, category: 'saving' },
      { id: 9, amount: 67, category: 'expense' },
      { id: 10, amount: 120, category: 'expense' },
      { id: 11, amount: 3, category: 'expense' },
      { id: 12, amount: 166.13, category: 'income' },
    ];
    return { operations };
  }

  genId(operations: Operation[]): number {
    return operations.length > 0
      ? Math.max(...operations.map((operation) => operation.id)) + 1
      : 0;
  }
}
