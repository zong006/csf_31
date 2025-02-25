import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todoForm !: FormGroup;
  fb = inject(FormBuilder);
  todoList : Todo[] = [];

  ngOnInit(): void {
    this.todoForm = this.createForm();
  }

  futureDueDateValidation = (ctrl : AbstractControl) => {
    
    let temp = ctrl.value as string
    let date = new Date(temp)
    
    // console.info(date > new Date())
    if (date > new Date()){
      return (null);
    }
    return {futureDueDateValidation: true} as ValidationErrors
  }
  
  protected createForm() : FormGroup{

    return this.fb.group({
      description : this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
      priority : this.fb.control<string>('low'), // <--- this initial value of low maps to the value attribute of the radio button, not the id
      feels : this.fb.control<string>(''),
      procrastinate : this.fb.control<boolean>(false),
      dueDate : this.fb.control<Date>(new Date(), [this.futureDueDateValidation])
    })
  }

  addTodo(){
    const newTodo : Todo = this.todoForm.value;
    console.info('>>> form entry: ', newTodo)
    newTodo.id = this.uuidv4();

    console.info('>>> id: ', newTodo.id)
    this.todoList.push(newTodo);
    
    console.info('>>> length', this.todoList.length)
  }

  removeTodo(item : Todo){
    console.info('>>> removed todo: ', item)
    var index = this.todoList.findIndex(
      function(x:Todo):boolean{
        return x.id == item.id 
      }
    )
    console.info('>>>index: ', index)
    this.todoList.splice(index,1);
  }

  sort(){
    this.todoList.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  uuidv4(): string {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }



}
