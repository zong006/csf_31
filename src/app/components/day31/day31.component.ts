import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fruit } from '../../day31models';
import { Day31ServiceService } from '../../service/day31-service.service';

@Component({
  selector: 'app-day31',
  standalone: false,
  templateUrl: './day31.component.html',
  styleUrl: './day31.component.css'
})
export class Day31Component implements OnInit{
  
  fruitList = new Map<string, number>() ;

  constructor(private day31Svc : Day31ServiceService){}

  ngOnInit(): void {
    this.day31Svc.fruitCatalogue$.subscribe(
      (data) => {
        this.fruitList = data;
        console.info(data)
      }
    )
  }
  

  addItem(name:string, price : number){
    const fruit: Fruit = { name: name, price: price };
    
    this.day31Svc.addFruit(fruit);
  }

}
