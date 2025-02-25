import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruit } from '../../day31models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-day31',
  standalone: false,
  templateUrl: './day31.component.html',
  styleUrl: './day31.component.css'
})
export class Day31Component {
  @Input()
  fruitList !: Map<string, number> ;

  @Output()
  newFruit = new EventEmitter<Fruit>();

  addItem(name:string, price : number){
    const fruit: Fruit = { name: name, price: price };
    // event.target.vale

    // console.info('>>> detail: ', fruit)
    
    this.newFruit.emit(fruit);
  }

}
