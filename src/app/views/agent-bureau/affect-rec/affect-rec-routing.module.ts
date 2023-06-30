import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectRecComponent } from './affect-rec/affect-rec.component';

const routes: Routes = [
  { path: '', component: AffectRecComponent }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffectRecRoutingModule { }
