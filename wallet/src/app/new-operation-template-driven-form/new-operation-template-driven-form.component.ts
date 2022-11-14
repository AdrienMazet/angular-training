import { Component } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { NewOperation } from '../types/NewOperation';
import { operationCagegories } from '../types/OperationCategory';

@Component({
  selector: 'app-new-operation-template-driven-form',
  templateUrl: './new-operation-template-driven-form.component.html',
  styleUrls: ['./new-operation-template-driven-form.component.css'],
})
export class NewOperationTemplateDrivenFormComponent {
  operation = new NewOperation();
  categories = operationCagegories;

  constructor(private operationService: OperationService) {}

  onSubmit() {
    this.operationService.addNewOperation(this.operation).subscribe(() => {
      alert('Operation added!');
      this.operation = new NewOperation();
    });
  }
}
