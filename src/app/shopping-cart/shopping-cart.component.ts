import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartModule } from './shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnDestroy {

  subscription : Subscription ;
  shoppingCartItems : ShoppingCartModule [] = [];
  totalAmount : number = 0 ;
  
  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartEntries();
    this.refreshTotalAmount();

    this.subscription = this.shoppingCartService.shoppingCartChangeEvent.subscribe(
      ( shoppingCartItems : ShoppingCartModule[] ) => 
        { 
          this.shoppingCartItems = shoppingCartItems;
          this.refreshTotalAmount();
        }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refreshTotalAmount()
  {
    for (let shoppingCartItem of this.shoppingCartItems)
    {
      this.totalAmount += shoppingCartItem.item.getPrice() * shoppingCartItem.quantity ; 
    }
  }

}
