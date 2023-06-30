import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentBRoutingModule } from './agent-b-routing.module';
import { AgentBComponent } from './agent-b/agent-b.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentBComponent
  ],
  imports: [
    CommonModule,
    AgentBRoutingModule,ReactiveFormsModule
  ]
})
export class AgentBModule { }
