import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ParcelformComponent } from './parcelform/parcelform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


import { HttpClientModule } from '@angular/common/http';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MainpageComponent,
    ParcelformComponent,
    NavbarComponent,
    FooterComponent,
    TrackingComponent,
    AdminDashboardComponent,
    AdminhomeComponent,
    ViewParcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
