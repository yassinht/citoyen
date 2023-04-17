import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation/reclamation.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,RouterModule,ReactiveFormsModule
  ]
})
export class ReclamationModule { }
