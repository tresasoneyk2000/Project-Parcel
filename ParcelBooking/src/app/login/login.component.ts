import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router,private customerService:CustomerService) {}
 
  username: string 
  password: string ;
  
  
  


  login() {
    // Perform login logic here
    console.log('Login clicked');
    console.log('Email:', this.username);
    console.log('Password:', this.password);
   localStorage.setItem('uname',this.username);
   console.log(localStorage);
  }
 
   
  
  goToSignup() {
    
    this.router.navigate(['/signup']);
  }
}
