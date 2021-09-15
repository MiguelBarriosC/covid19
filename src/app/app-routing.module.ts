import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
//Guard
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full' },
  { path:'dashboard', component:DashboardComponent },
  { path:'solicitudes', component:SolicitudesComponent, canActivate:[ LoginGuard] },
  { path:'unauthorized', component:UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
