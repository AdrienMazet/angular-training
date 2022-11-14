import { Injectable } from '@angular/core';
import { Operation } from '../types/Operation';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor() {}

  // use inmemoryhttp to train rxjs
  public addNewOperation(operation: Operation) {
    console.log('service adding new operation : ', operation);
  }
}
