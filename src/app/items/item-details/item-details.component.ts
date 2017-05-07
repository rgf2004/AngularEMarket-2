import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , Params } from '@angular/router';

import { ItemModule } from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item : ItemModule ;

  constructor(
      private itemsService : ItemsService, 
      private activatedRoute : ActivatedRoute, 
      private router : Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params : Params) => {     
          this.item = this.itemsService.getItemById(+params['id']);          
      }
    );
  }

  addToCart()
  {
    this.itemsService.addToShoppingCart(this.item);
  }

}
