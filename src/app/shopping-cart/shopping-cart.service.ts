import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ShoppingCartModule } from './shopping-cart';
import { ItemModule } from '../items/item';

@Injectable()
export class ShoppingCartService {

  shoppingCartChangeEvent : Subject<ShoppingCartModule[]> = new Subject<ShoppingCartModule[]>();
  private shoppingCartEntries : ShoppingCartModule[] = [];

  constructor() {}

  getShoppingCartEntries()
  {
    this.shoppingCartEntries = [];
    if (localStorage.getItem("shoppingCart") != null)    
    {            
      let objectsArray = JSON.parse(localStorage.getItem("shoppingCart"));
      for (let obj of objectsArray )
      {
        this.shoppingCartEntries.push(this.getShoppingItemFromJson(obj));
      }
    }      
    
    return this.shoppingCartEntries.slice();
  }

  addToShoppingCart(item : ItemModule) {
    
    for (let shoppingCartEntry of this.shoppingCartEntries)
    {
      if (shoppingCartEntry.item.getId() == item.getId())
      {
        shoppingCartEntry.quantity++;      
        this.refreshLocalStorage();
        return;
      }
    }    
    this.shoppingCartEntries.push(new ShoppingCartModule(item,1));
    this.refreshLocalStorage();    
  }

  private refreshLocalStorage()
  {    
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCartEntries));
    this.shoppingCartChangeEvent.next(this.shoppingCartEntries.slice());
  }


  private getShoppingItemFromJson(json) : ShoppingCartModule
  {
    let item : ItemModule = new ItemModule(
                                              json.item.id,
                                              json.item.title,
                                              json.item.imageUrl,
                                              json.item.description,
                                              json.item.price,
                                              json.item.daysToDeliver,
                                              json.item.categoriesId);

    return new ShoppingCartModule(item,json.quantity);
  }

}
