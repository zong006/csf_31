import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fruit } from '../../day31models';

@Component({
  selector: 'app-day31-form',
  standalone: false,
  templateUrl: './day31-form.component.html',
  styleUrl: './day31-form.component.css'
})
export class Day31FormComponent implements OnInit{
  
  @Input()
  fruitCart !: Map<string, number>;

  @Input()
  totalCost !: number;

  @Output()
  changeSignal = new EventEmitter<string>();

  sendSignal(event:any, fruit: string){
    
    // const change = new  Map<string, string>();
    // change.set(fruitName, event.target.value);
    
    console.info('>>> change: ', fruit + 'DELIMITER' + event.target.value)
    this.changeSignal.emit(fruit + 'DELIMITER' + event.target.value);
  }


  orderForm !: FormGroup;

  ngOnInit(): void {
    this.orderForm = this.createForm();
  }  

  fb = inject(FormBuilder);


  createForm():FormGroup{
    return this.fb.group({
      name : this.fb.control<string>(''),
      address : this.fb.control<string>(''),
      delivery : this.fb.control<string>('')
    })
  }

  processForm(){
    const formValues = this.orderForm.value;
    console.info('>>> form: ', formValues)
    
  }


}
