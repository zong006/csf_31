import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { Day31Component } from './components/day31/day31.component';
import { Day31FormComponent } from './components/day31-form/day31-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Day31Component,
    Day31FormComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
