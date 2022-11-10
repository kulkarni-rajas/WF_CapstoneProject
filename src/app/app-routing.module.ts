import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { QaComponent } from './qa/qa.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
{path:'signup',component:SignupComponent},
{path:'qa',component:QaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
