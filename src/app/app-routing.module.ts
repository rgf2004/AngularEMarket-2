import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryViewComponent } from './categories/category-view/category-view.component'
import { ItemDetailsComponent } from './items/item-details/item-details.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component'

const appRoutes : Routes = [
    {path : '' , redirectTo : '/categories/0', pathMatch : 'full'},
    {
        path : 'categories' , component : CategoriesComponent, children : 
        [
            { path : ':id', component : CategoryViewComponent },
            { path : 'items/:id', component : ItemDetailsComponent }
        ]
    },
    {path : 'shopping-cart' , component : ShoppingCartComponent },
    {path : 'signup' , component : SignupComponent },
    {path : 'signin' , component : SigninComponent }
];

@NgModule({

    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]

})
export class AppRoutingModule{

}