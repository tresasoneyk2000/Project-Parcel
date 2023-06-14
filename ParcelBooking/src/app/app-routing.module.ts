import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminDashboardComponent, AdminDashboardComponentimplements } from './admin-dashboard/admin-dashboard.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ParcelformComponent } from './parcelform/parcelform.component';
import { SignupComponent } from './signup/signup.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login/signup', component: SignupComponent },
  {path:'home', component:HomeComponent},
  {path:'mainpage', component:MainpageComponent},
  {path:'parcelform', component:ParcelformComponent},
  {path:'mainpage/parcelform', component:ParcelformComponent},
  {path:'tracking',component:TrackingComponent},
  {path:'admindashboard',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
