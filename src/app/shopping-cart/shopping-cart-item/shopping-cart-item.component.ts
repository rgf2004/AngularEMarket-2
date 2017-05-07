import { Component, OnInit, Input } from '@angular/core';

import { ShoppingCartModule } from '../shopping-cart';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() shoppingCartItem : ShoppingCartModule ;

  constructor() { }

  ngOnInit() {
  }

}
