import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitoyenRoutingModule } from './citoyen-routing.module';
import { CitoyenComponent } from './citoyen/citoyen.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitoyenComponent
  ],
  imports: [
    CommonModule,
    CitoyenRoutingModule,ReactiveFormsModule
  ]
})
export class CitoyenModule { }
