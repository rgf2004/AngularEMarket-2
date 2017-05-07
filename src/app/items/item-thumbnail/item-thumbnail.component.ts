import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemModule } from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.css']
})
export class ItemThumbnailComponent implements OnInit {

  @Input() item : ItemModule ;

  constructor(private itemsService : ItemsService ,private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  navigateToItemDetails()
  {
    this.router.navigate(['../items',this.item.getId()], { relativeTo : this.activatedRoute});
  }

  addToCart()
  {
    this.itemsService.addToShoppingCart(this.item);
  }

}
