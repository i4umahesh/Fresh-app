import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    PopularProductsComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PopularDealsModule { }
