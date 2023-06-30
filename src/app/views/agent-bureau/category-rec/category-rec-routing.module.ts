import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRecComponent } from './category-rec/category-rec.component';

const routes: Routes = [
  { path: '', component: CategoryRecComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRecRoutingModule { }
