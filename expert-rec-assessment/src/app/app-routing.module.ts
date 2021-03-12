import { DashboardComponent } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'callback' , component: CallbackComponent},
  { path: 'dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
