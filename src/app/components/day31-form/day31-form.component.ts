import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fruit } from '../../day31models';
import { Day31ServiceService } from '../../service/day31-service.service';

@Component({
  selector: 'app-day31-form',
  standalone: false,
  templateUrl: './day31-form.component.html',
  styleUrl: './day31-form.component.css'
})
export class Day31FormComponent implements OnInit{
  
  constructor (private day31Svc : Day31ServiceService){};

  fruitCart = new  Map<string, number>() ;

  @Input()
  totalCost !: number;


  sendSignal(event:any, fruit: string){
    
    console.info('>>> change: ', fruit + 'DELIMITER' + event.target.value)
    this.day31Svc.changeItemQty(fruit + 'DELIMITER' + event.target.value);
  }


  orderForm !: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.orderForm = this.createForm();

    this.day31Svc.fruitCart$.subscribe( // <-- listens to inputs from sibling. listen to the newFruit$ observable
      (data) => {
        console.info('>>>new fruit from sibling: ', data)
        this.fruitCart = data
      }
    )

    this.day31Svc.totalCost$.subscribe(
      (data) => {
        console.info('>>> from svc, total cost: ', data)
        this.totalCost = data
      }
    )
  } 

  createForm():FormGroup{
    return this.fb.group({
      name : this.fb.control<string>(''),
      address : this.fb.control<string>(''),
      delivery : this.fb.control<string>(''),
    })
  }

  processForm(){
    
    var formValues = this.orderForm.value;
    formValues.items = this.fruitCart
    formValues.totalCost = this.totalCost
    console.info('>>> form: ', formValues)
    
  }


}
