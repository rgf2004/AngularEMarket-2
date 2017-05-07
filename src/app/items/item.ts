export class ItemModule 
{

    constructor (
                    private id : number,                    
                    private title : string,
                    private imageUrl : string, 
                    private description : string, 
                    private price : number, 
                    private daysToDeliver : number ,
                    private categoriesId : number []
                ) 
                {
                    
                }

    getId() : number 
    {
        return this.id;
    }

    getTitle() : string
    {
        return this.title;
    }

    getPrice() : number 
    {
        return this.price ;
    }

    getCategoriesIds() : number[] 
    {
        return this.categoriesId ;
    }
}