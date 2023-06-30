import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRecRoutingModule } from './category-rec-routing.module';
import { CategoryRecComponent } from './category-rec/category-rec.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryRecComponent
  ],
  imports: [
    CommonModule,
    CategoryRecRoutingModule,ReactiveFormsModule
  ]
})
export class CategoryRecModule { }
