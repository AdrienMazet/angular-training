import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  dataFromParent = 'Hello child';
  randomNumberFromChild?: number;

  setRandomNumberFromChild(randomNumberFromChild: number) {
    this.randomNumberFromChild = randomNumberFromChild;
  }
}
