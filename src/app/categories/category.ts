export class CategoryModule { 
 
  constructor(private id : number, private name : string , private itemsCount : number) {    
  }

  getID() : number 
  {
    return this.id;
  }

  setItemsCount(count : number) 
  {
    this.itemsCount = count;
  }
}
