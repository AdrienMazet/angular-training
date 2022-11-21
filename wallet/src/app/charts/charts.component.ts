import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';

type PieChartItem = {
  name: string;
  value: number;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  data = [] as PieChartItem[];
  constructor(private operationService: OperationService) {}

  ngOnInit() {
    this.operationService.getOperations().subscribe(
      (operations) =>
        (this.data = operations.reduce((acc, curr) => {
          const index = acc.findIndex((item) => item.name === curr.category);
          index > -1
            ? (acc[index].value += curr.amount)
            : acc.push({
                name: curr.category,
                value: curr.amount,
              });
          return acc;
        }, [] as PieChartItem[]))
    );
  }
}
