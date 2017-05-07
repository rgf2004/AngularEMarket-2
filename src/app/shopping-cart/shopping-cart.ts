import {ItemModule} from '../items/item';

export class ShoppingCartModule 
{
    item : ItemModule ;
    quantity : number ;

    constructor (i : ItemModule, q : number )
    {
        this.item = i;
        this.quantity = q;
    }
}