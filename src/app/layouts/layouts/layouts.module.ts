import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AgentLayoutComponent } from './agent-layout/agent-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AgentMissionLayoutComponent } from './agent-mission-layout/agent-mission-layout.component';


@NgModule({
  declarations: [
    AgentLayoutComponent,
    AdminLayoutComponent,
    AgentMissionLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,RouterModule,ReactiveFormsModule
  ]
})
export class LayoutsModule { }
