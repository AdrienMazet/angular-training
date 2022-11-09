import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links = [
    { path: 'dashboard', label: 'dashboard' },
    { path: 'new-operation', label: 'new operation' },
    { path: 'todo', label: 'todo' },
  ];
}
