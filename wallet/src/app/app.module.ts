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
import { NewOperationTemplateDrivenFormComponent } from './new-operation-template-driven-form/new-operation-template-driven-form.component';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { LinkCasePipe } from './pipes/link-case.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DashboardComponent,
    NewOperationTemplateDrivenFormComponent,
    ChildComponent,
    ParentComponent,
    LinkCasePipe,
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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
