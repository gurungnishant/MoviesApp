import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './movies/dashboard/dashboard.component';
import { LoginComponent } from './movies/login/login.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
                        {path: 'home/:id', component: DashboardComponent},
                        {path: '', redirectTo:'/login', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
