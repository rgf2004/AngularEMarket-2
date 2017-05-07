import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , Params } from '@angular/router';

import { CategoryModule } from '../category';
import { CategoriesService } from '../categories.service';
import { ItemModule } from '../../items/item';
import { ItemsService } from '../../items/items.service';
import { PagerService } from '../../shared/pager.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  items : ItemModule[] = [];
  categoryId : number = 0;
  selectCategory : CategoryModule ;

  sortColumn : string = '';

  // pager object
  pageSize : number = 9;
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(
              private categoriesService : CategoriesService,
              private itemsService : ItemsService, 
              private activatedRoute : ActivatedRoute, 
              private router : Router,
              private pagerService : PagerService
             ) 
             {}

  ngOnInit() {    
    
    this.activatedRoute.params.subscribe(
      (params : Params) => {     
          this.sortColumn = '';
          this.categoryId = +params['id'];
          this.items = this.itemsService.getItemsByCategory(this.categoryId);
          this.selectCategory = this.categoriesService.getCategoryById(this.categoryId);

          this.setPage(1);
      }
    );
        
  }

  onSearchChange(searchValue : string ) {  
    this.items = this.itemsService.getItemsByTitle(searchValue);
    this.setPage(1);
  }

  setPage(page: number) 
  {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.items.length, page, this.pageSize);

      // get current page of items
      this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
