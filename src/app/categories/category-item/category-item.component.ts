import { Component, OnInit, Input } from '@angular/core';

import { CategoryModule } from '../category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category : CategoryModule;

  @Input() index : number ;

  constructor() { }

  ngOnInit() {
    
  }

}
