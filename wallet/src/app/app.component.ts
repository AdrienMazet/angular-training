import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links = [
    { path: 'dashboard', label: 'dashboard' },
    {
      path: 'new-operation-template-driven-form',
      label: 'new operation ( template driven form )',
    },
    { path: 'parent-child', label: 'Parent & child communication' },
    { path: 'todo', label: 'todo' },
  ];
}
