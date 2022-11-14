import { Component } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { Operation } from '../types/Operation';
import { operationCagegories } from '../types/OperationCategory';

@Component({
  selector: 'app-new-operation-template-driven-form',
  templateUrl: './new-operation-template-driven-form.component.html',
  styleUrls: ['./new-operation-template-driven-form.component.css'],
})
export class NewOperationTemplateDrivenFormComponent {
  operation = new Operation();
  categories = operationCagegories;

  constructor(private operationService: OperationService) {}

  onSubmit() {
    this.operationService.addNewOperation(this.operation);
    this.operation = new Operation();
  }
}
