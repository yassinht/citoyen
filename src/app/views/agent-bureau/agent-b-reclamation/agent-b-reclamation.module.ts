import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentBReclamationRoutingModule } from './agent-b-reclamation-routing.module';
import { AgentBReclamationComponent } from './agent-b-reclamation/agent-b-reclamation.component';


@NgModule({
  declarations: [
    AgentBReclamationComponent
  ],
  imports: [
    CommonModule,
    AgentBReclamationRoutingModule
  ]
})
export class AgentBReclamationModule { }
