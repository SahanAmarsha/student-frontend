import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HeaderComponent} from './components/shared/header.component';
import {AddStudentComponent} from './components/students/add-student.component';
import {DisplayStudentComponent} from './components/students/display-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DisplayStudentComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
