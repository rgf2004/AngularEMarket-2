import { Pipe, PipeTransform } from '@angular/core';

import { ItemModule } from '../items/item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, field: string): any {
    
    if(value == null) 
    {
      return null;
    }
    
     if (field == 'title') {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);  
    
  }
}
