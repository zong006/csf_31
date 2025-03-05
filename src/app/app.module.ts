import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { Day31Component } from './components/day31/day31.component';
import { Day31FormComponent } from './components/day31-form/day31-form.component';
import { MaterialModule } from './module/material/material.module';
import { Day31ParentComponent } from './components/day31-parent/day31-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Day31Component,
    Day31FormComponent,
    Day31ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
