import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentBComponent } from './agent-b/agent-b.component';

const routes: Routes = [
  { path: '', component: AgentBComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentBRoutingModule { }
