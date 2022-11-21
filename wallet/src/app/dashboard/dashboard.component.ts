import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OperationService } from '../services/operation.service';
import { Operation } from '../types/Operation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  balance = 0;
  savings = 0;
  displayedColumns: string[] = ['category', 'amount'];
  dataSource: MatTableDataSource<Operation> = new MatTableDataSource(
    [] as Operation[]
  );

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private operationService: OperationService) {}

  ngOnInit() {
    this.operationService.getOperations().subscribe((operations) => {
      this.dataSource = new MatTableDataSource(operations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.balance = operations.reduce(
        (a, b) => a + b.amount * (b.category === 'income' ? 1 : -1),
        0
      );
      this.savings = operations
        .filter((operation) => operation.category === 'saving')
        .reduce((a, b) => a + b.amount, 0);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
