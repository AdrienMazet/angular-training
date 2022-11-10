import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewOperationReactiveFormComponent } from './new-operation-reactive-form/new-operation-reactive-form.component';
import { NewOperationTemplateDrivenFormComponent } from './new-operation-template-driven-form/new-operation-template-driven-form.component';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'new-operation-reactive-form',
    component: NewOperationReactiveFormComponent,
  },
  {
    path: 'new-operation-template-driven-form',
    component: NewOperationTemplateDrivenFormComponent,
  },
  { path: 'parent-child', component: ParentComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
