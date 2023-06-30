import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectRecRoutingModule } from './affect-rec-routing.module';
import { AffectRecComponent } from './affect-rec/affect-rec.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AffectRecComponent
  ],
  imports: [
    CommonModule,
    AffectRecRoutingModule,ReactiveFormsModule
  ]
})
export class AffectRecModule { }
