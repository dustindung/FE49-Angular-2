import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Dressing-Room-Service/home/home.component';
import { CategoryComponent } from './Dressing-Room-Service/category/category.component';
import { ModelComponent } from './Dressing-Room-Service/model/model.component';
import { ProductItemComponent } from './Dressing-Room-Service/product-item/product-item.component';
import { ProductListComponent } from './Dressing-Room-Service/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ModelComponent,
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
