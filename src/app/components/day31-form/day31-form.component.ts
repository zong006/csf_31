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
    
    console.info('>>> change: ', fruit + 'DELIMITER' + event.target.value)
    this.changeSignal.emit(fruit + 'DELIMITER' + event.target.value);
  }


  orderForm !: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.orderForm = this.createForm();
  } 

  createForm():FormGroup{
    return this.fb.group({
      name : this.fb.control<string>(''),
      address : this.fb.control<string>(''),
      delivery : this.fb.control<string>(''),
      // items : this.fruitCart,
      // totalCost : this.totalCost
    })
  }

  processForm(){
    
    var formValues = this.orderForm.value;
    formValues.items = this.fruitCart
    formValues.totalCost = this.totalCost
    console.info('>>> form: ', formValues)
    
  }


}
