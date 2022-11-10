import { Component } from '@angular/core';

@Component({
  selector: 'app-new-operation-template-driven-form',
  templateUrl: './new-operation-template-driven-form.component.html',
  styleUrls: ['./new-operation-template-driven-form.component.css'],
})
export class NewOperationTemplateDrivenFormComponent {
  amount = 0;
  // get if from service with observables
  types = ['expense', 'income', 'saving'];
  selectedType = this.types[0];

  onSubmit() {
    // call the service
    console.log(this.selectedType, this.amount);
    this.amount = 0;
    this.selectedType = this.types[0];
  }
}
