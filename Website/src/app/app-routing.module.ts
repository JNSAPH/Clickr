import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickRouteComponent } from './ClickRoute/click-route/click-route.component';
import { LoginRouteComponent } from './LoginRoute/login-route/login-route.component';

const routes: Routes = [
  {path: '', component: LoginRouteComponent},
  {path: 'click', component: ClickRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
