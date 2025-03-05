import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day31ParentComponent } from './components/day31-parent/day31-parent.component';
import { TodoComponent } from './components/todo/todo.component'; 

const routes: Routes = [
  {path: 'day31Parent', component : Day31ParentComponent},
  {path: 'todo', component : TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
