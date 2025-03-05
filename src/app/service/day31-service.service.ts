import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Fruit } from '../day31models';

@Injectable({
  providedIn: 'root'
})
export class Day31ServiceService {

  /*
    shared service responsible for pushing data from the fruit list into fruit cart (sibling components)
  */ 
  constructor() { }

  private newFruitSource = new Subject<Fruit>(); // <-- use subject if the data is static. 
  newFruit$ = this.newFruitSource.asObservable(); // <-- $ sign annotates it as an Observable where sibling can subscribe, instead of a variable managed by parent

  private fruitCatalogueSource = new BehaviorSubject<Map<string, number>>(new Map);
  fruitCatalogue$ = this.fruitCatalogueSource.asObservable();

  private fruitCartSource = new BehaviorSubject<Map<string, number>>(new Map); // <-- use behaviorsubject if data is dynamic. requires initial value
  fruitCart$ = this.fruitCartSource.asObservable();

  private totalCostSource = new BehaviorSubject<number>(0);
  totalCost$ = this.totalCostSource.asObservable();

  private chgQtySource = new BehaviorSubject<string>('');
  chgQty$ = this.chgQtySource.asObservable();

  setFruitCart(fruitCart : Map<string, number>){
    console.info('>>svc: ', fruitCart);
    this.fruitCartSource.next(fruitCart);
  }

  setFruitCatalogue(fruitCat : Map<string, number>){
    console.info('>>> catalogue: ', fruitCat);
    this.fruitCatalogueSource.next(fruitCat);

  }

  addFruit(newFruit : Fruit) {
    const fruitCart = this.fruitCartSource.value;
    let totalCost = this.totalCostSource.value;

    console.info(fruitCart);
    if (fruitCart.has(newFruit.name)){
      console.info('>>>check: item exists')
      fruitCart.set(newFruit.name, Number(fruitCart.get(newFruit.name))+1);
    }
    else {
      console.info('>>> check: item dont exists')
      fruitCart.set(newFruit.name, 1);
    }

    console.info('>>> fruits: ', fruitCart)
    this.fruitCartSource.next(fruitCart);
    totalCost += newFruit.price;
    this.totalCostSource.next(totalCost);
    
  }

  changeItemQty(change: string){
    
    var terms = change.split('DELIMITER');
    let totalCost = this.totalCostSource.value;
    const fruitCatalogue = this.fruitCatalogueSource.value;
    let fruitCart = this.fruitCartSource.value;
    
    const fruitName = terms[0];
    console.info(fruitName)
    console.info('>>>chg: ', fruitName, 'price: ', fruitCatalogue.get(fruitName))


    if (String(terms[1]) == 'increase' ){
      totalCost += Number(fruitCatalogue.get(fruitName)); 
      fruitCart.set(fruitName, Number(fruitCart.get(fruitName)) + 1) ;
    }
    else if (String(terms[1]) == 'decrease'){
      totalCost -= Number(fruitCatalogue.get(fruitName));
      fruitCart.set(fruitName, Number(fruitCart.get(fruitName)) - 1) 

      if (Number(fruitCart.get(fruitName)) <=0){
        fruitCart.delete(fruitName)
      }
    }
    this.fruitCartSource.next(fruitCart);
    this.totalCostSource.next(totalCost);
  }

  
}
