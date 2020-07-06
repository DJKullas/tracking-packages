import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'packages', component: AllPackagesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
