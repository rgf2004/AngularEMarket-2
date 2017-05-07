import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { CategoriesService } from './categories/categories.service';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryViewComponent } from './categories/category-view/category-view.component';

import { ItemsService } from './items/items.service';
import { ItemThumbnailComponent } from './items/item-thumbnail/item-thumbnail.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

import { TruncatePipe } from './shared/truncate.pipe';
import { OrderByPipe } from './shared/order-by.pipe';
import { PagerService } from './shared/pager.service';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DropdownDirective,
    CategoriesListComponent,
    CategoryItemComponent,
    CategoriesComponent,
    ShoppingCartComponent,
    CategoryViewComponent,
    ItemThumbnailComponent,
    TruncatePipe,
    OrderByPipe,
    ItemDetailsComponent,
    ShoppingCartItemComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CategoriesService, ItemsService, PagerService, ShoppingCartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
