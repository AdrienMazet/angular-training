import { Component } from '@angular/core';

@Component({
  selector: 'app-new-operation-template-driven-form',
  templateUrl: './new-operation-template-driven-form.component.html',
  styleUrls: ['./new-operation-template-driven-form.component.css'],
})
export class NewOperationTemplateDrivenFormComponent {
  amount = 0;
  selectedType = '';
  // get if from service with observables
  types = ['income', 'expense', 'saving'];

  onSubmit() {
    console.log(this.selectedType, this.amount);
    this.amount = 0;
    this.selectedType = '';
  }
}
