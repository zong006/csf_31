import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Fruit } from '../../day31models';
import { Day31Component } from '../day31/day31.component';
import { Day31FormComponent } from '../day31-form/day31-form.component';
import { Day31ServiceService } from '../../service/day31-service.service';

@Component({
  selector: 'app-day31-parent',
  standalone: false,
  templateUrl: './day31-parent.component.html',
  styleUrl: './day31-parent.component.css'
})
export class Day31ParentComponent implements OnInit, AfterViewInit{

  constructor (private day31Svc : Day31ServiceService){};

  ngAfterViewInit(): void {
    this.day31.fruitList = this.fruitCatalogue;
    // this.day31form.fruitCart = this.fruitCart;
    // this.day31form.totalCost = this.totalCost;
  }

  @ViewChild(Day31Component) day31 !: Day31Component;
  // @ViewChild(Day31FormComponent) day31form !: Day31FormComponent;

  fruitCatalogue = new Map<string, number>();

  ngOnInit(): void {
    this.fruitCatalogue.set("acorn_squash", 1.00)
    this.fruitCatalogue.set("apple", 1.50)
    this.fruitCatalogue.set("bell_pepper", 0.70)
    this.fruitCatalogue.set("blueberries", 3.20)

    // console.info('>>>init parent: ', this.fruitCatalogue);
    this.day31Svc.setFruitCatalogue(this.fruitCatalogue);
  }

  fruitCart = new Map<string, number>() ;

  totalCost = 0;

  // updateFruitCart(newFruit : Fruit){
    
  //   if (this.fruitCart.has(newFruit.name)){
  //     console.info('>>>check: item exists')
  //     this.fruitCart.set(newFruit.name, Number(this.fruitCart.get(newFruit.name))+1);
  //   }
  //   else {
  //     console.info('>>> check: item dont exists')
  //     this.fruitCart.set(newFruit.name, 1);
  //   }
  //   console.info('>>> fruits: ', this.fruitCart)
  //   this.totalCost += newFruit.price;
  //   this.totalCost = Number(this.totalCost.toFixed(2))
  // }

  changeItemQty(change : string){
    console.info('>>>> parent',change)
    var terms = change.split('DELIMITER');
    
    const fruitName = terms[0];
    console.info(fruitName)

    if (String(terms[1]) == 'increase' ){
      this.totalCost += Number(this.fruitCatalogue.get(fruitName)); 
      this.fruitCart.set(fruitName, Number(this.fruitCart.get(fruitName)) + 1) ;
    }
    else if (String(terms[1]) == 'decrease'){
      this.totalCost -= Number(this.fruitCatalogue.get(fruitName));
      this.fruitCart.set(fruitName, Number(this.fruitCart.get(fruitName)) - 1) 

      if (Number(this.fruitCart.get(fruitName)) <=0){
        this.fruitCart.delete(fruitName)
      }
    }
    
  }

}
