import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesContainerComponent } from './categories-container/categories-container.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';



@NgModule({
  declarations: [
    CategoriesContainerComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
