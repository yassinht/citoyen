import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitoyenComponent } from './citoyen/citoyen.component';

const routes: Routes = [
  { path: '', component: CitoyenComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitoyenRoutingModule { }
