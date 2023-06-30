import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentMissionComponent } from './agent-mission/agent-mission.component';

const routes: Routes = [
  { path: '', component: AgentMissionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentMissionRoutingModule { }
