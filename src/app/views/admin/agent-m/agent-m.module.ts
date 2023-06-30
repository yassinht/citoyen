import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentMRoutingModule } from './agent-m-routing.module';
import { AgentMComponent } from './agent-m/agent-m.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentMComponent
  ],
  imports: [
    CommonModule,
    AgentMRoutingModule,ReactiveFormsModule
  ]
})
export class AgentMModule { }
