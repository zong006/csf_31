import { Component, OnInit } from '@angular/core';
import { Fruit } from './day31models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  fruitCatalogue = new Map<string, number>();

  ngOnInit(): void {
    this.fruitCatalogue.set("acorn_squash", 1.00)
    this.fruitCatalogue.set("apple", 1.50)
    this.fruitCatalogue.set("bell_pepper", 0.70)
    this.fruitCatalogue.set("blueberries", 3.20)
  }

  fruitCart = new Map<string, number>() ;

  totalCost = 0;

  updateFruitCart(newFruit : Fruit){
    
    if (this.fruitCart.has(newFruit.name)){
      console.info('>>>check: item exists')
      this.fruitCart.set(newFruit.name, Number(this.fruitCart.get(newFruit.name))+1);
    }
    else {
      console.info('>>> check: item dont exists')
      this.fruitCart.set(newFruit.name, 1);
    }
    console.info('>>> fruits: ', this.fruitCart)
    this.totalCost += newFruit.price;
  }

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
