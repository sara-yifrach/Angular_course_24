import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsFormsTDComponent } from './student-details-forms-td/student-details-forms-td.component';
import { StudentDetailsFormMDComponent } from './student-details-form-md/student-details-form-md.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { AsyncAwaitDemoComponent } from './async-await-demo/async-await-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentDetailsFormsTDComponent,
    StudentDetailsFormMDComponent,
    AsyncAwaitDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
