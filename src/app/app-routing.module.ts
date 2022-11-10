import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: LoginComponent},
    {path: 'home',component: LoginComponent},
    {path: 'changepassword', component: ChangePasswordComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
