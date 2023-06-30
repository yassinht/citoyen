import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/shared/auth/auth.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/layouts/admin-layout/admin-layout.component';
import { AgentLayoutComponent } from './layouts/layouts/agent-layout/agent-layout.component';

const routes: Routes = [
  {path:'',component:AuthComponent},


  {path:'admin',component:AdminLayoutComponent,
children:[
  {path:'reclamations',loadChildren:()=>import('./views/admin/reclamation/reclamation.module').then(m=>m.ReclamationModule)},
  {path:'agent-b',loadChildren:()=>import('./views/admin/agent-b/agent-b/agent-b.module').then(m=>m.AgentBModule)},
  {path:'agent-m',loadChildren:()=>import('./views/admin/agent-m/agent-m.module').then(m=>m.AgentMModule)},
  {path:'citoyen',loadChildren:()=>import('./views/admin/citoyen/citoyen.module').then(m=>m.CitoyenModule)}

]},

{path:'agentb',component:AgentLayoutComponent,
children:[
  {path:'reclamations',loadChildren:()=>import('./views/agent-bureau/affect-rec/affect-rec.module').then(m=>m.AffectRecModule)},
  {path:'agent-mission',loadChildren:()=>import('./views/agent-bureau/agent-mission/agent-mission.module').then(m=>m.AgentMissionModule)},
  {path:'category',loadChildren:()=>import('./views/agent-bureau/category/category.module').then(m=>m.CategoryModule)},
  {path:'category-rec',loadChildren:()=>import('./views/agent-bureau/category-rec/category-rec.module').then(m=>m.CategoryRecModule)}


]},

{path: 'notfound', component: NotFoundComponent},
{path: '**', redirectTo: '/notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
