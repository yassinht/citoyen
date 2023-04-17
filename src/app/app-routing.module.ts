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
  {path:'reclamations',loadChildren:()=>import('./views/admin/reclamation/reclamation.module').then(m=>m.ReclamationModule)}
]},

{path:'agent',component:AgentLayoutComponent,
children:[
  {path:'reclamations',loadChildren:()=>import('./views/admin/reclamation/reclamation.module').then(m=>m.ReclamationModule)}
]},

{path: 'notfound', component: NotFoundComponent},
{path: '**', redirectTo: '/notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
