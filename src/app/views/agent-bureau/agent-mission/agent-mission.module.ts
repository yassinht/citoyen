import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentMissionRoutingModule } from './agent-mission-routing.module';
import { AgentMissionComponent } from './agent-mission/agent-mission.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentMissionComponent,
  ],
  imports: [
    CommonModule,
    AgentMissionRoutingModule,ReactiveFormsModule
  ]
})
export class AgentMissionModule { }
