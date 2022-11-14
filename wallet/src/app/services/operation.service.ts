import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { NewOperation } from '../types/NewOperation';
import { Operation } from '../types/Operation';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  private operationsURL = 'api/operations';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getOperations() {
    return this.http
      .get<Operation[]>(this.operationsURL)
      .pipe(
        tap(console.log),
        catchError(this.handleError<Operation[]>('getOperations', []))
      );
  }

  public addNewOperation(newOperation: NewOperation): Observable<Operation> {
    return this.http
      .post<Operation>(this.operationsURL, newOperation, this.httpOptions)
      .pipe(
        tap(console.log),
        catchError(this.handleError<Operation>('addNewOperation'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
