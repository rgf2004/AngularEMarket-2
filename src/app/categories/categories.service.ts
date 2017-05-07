import { Injectable } from '@angular/core';

import { CategoryModule } from './category';
import { ItemsService } from '../items/items.service';

@Injectable()
export class CategoriesService {

  constructor(private itemsService : ItemsService ) { }

  getCategories() : CategoryModule []
  {
    let categories : CategoryModule [] = this.getCategoriesFromBE();
    for (let category of categories)
    {
      let itemsCount = this.itemsService.getItemsCountByCategory(category.getID());
      category.setItemsCount(itemsCount);
    }    
    return categories;
  }

  getCategoryById(categoryId : number) : CategoryModule
  {
    let categories : CategoryModule [] = this.getCategoriesFromBE();

    for (let category of categories)
    {
      if (category.getID() == categoryId)
        return category;
    }    
  }

  private getCategoriesFromBE() : CategoryModule []
  {
    return [
              // mock data till getting it from BE
              new CategoryModule(0, 'All Products', 0),
              new CategoryModule(1, 'Electronics', 0),
              new CategoryModule(2, 'Phones', 0),
              new CategoryModule(3, 'Tablets', 0),
              new CategoryModule(4, 'PCs', 0),
              new CategoryModule(5, 'Printers', 0)                  
            ];
  }
}
