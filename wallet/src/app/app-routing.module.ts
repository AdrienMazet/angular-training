import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewOperationTemplateDrivenFormComponent } from './new-operation-template-driven-form/new-operation-template-driven-form.component';
import { ParentComponent } from './parent/parent.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'new-operation-template-driven-form',
    component: NewOperationTemplateDrivenFormComponent,
  },
  { path: 'parent-child', component: ParentComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'charts', component: ChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
