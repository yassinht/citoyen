import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentBReclamationComponent } from './agent-b-reclamation/agent-b-reclamation.component';

const routes: Routes = [
    { path: '', component: AgentBReclamationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentBReclamationRoutingModule { }
