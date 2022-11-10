import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() dataFromParent?: string;

  @Output() eventFromChild = new EventEmitter<number>();

  passDataFromChildToParent() {
    this.eventFromChild.emit(Math.random() * 1000);
  }
}
