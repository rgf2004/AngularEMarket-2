import { Component, OnInit } from '@angular/core';

import { CategoryModule } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories : CategoryModule[] = [];

  constructor(private categoriesService : CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

}
