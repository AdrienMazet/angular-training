import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewOperationReactiveFormComponent } from './new-operation-reactive-form/new-operation-reactive-form.component';
import { NewOperationTemplateDrivenFormComponent } from './new-operation-template-driven-form/new-operation-template-driven-form.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DashboardComponent,
    NewOperationReactiveFormComponent,
    NewOperationTemplateDrivenFormComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
