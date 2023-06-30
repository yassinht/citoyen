import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentMComponent } from './agent-m/agent-m.component';

const routes: Routes = [
  { path: '', component: AgentMComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentMRoutingModule { }
