import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclaMissionRoutingModule } from './recla-mission-routing.module';
import { ReclaMissionComponent } from './recla-mission/recla-mission.component';


@NgModule({
  declarations: [
    ReclaMissionComponent
  ],
  imports: [
    CommonModule,
    ReclaMissionRoutingModule
  ]
})
export class ReclaMissionModule { }
