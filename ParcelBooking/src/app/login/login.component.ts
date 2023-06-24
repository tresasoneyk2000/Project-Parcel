import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { SignupService } from '../signup.service';
// import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameExists: boolean;
  errorMessage: string;
  
  constructor(private router: Router,private signupservice:SignupService) {}
 
  username: string 
  password: string ;
  
  
  


    // Perform login 
  login() {
    this.signupservice.logincheck(this.username,this.password)
    .subscribe(usernameExists => {
      if (usernameExists) {
        // Navigate to the main page if login is successful
        this.router.navigate(['/mainpage']);
        console.log(usernameExists);
      } else {
        // Set error message for invalid username/password
        this.errorMessage = 'Invalid username/password';
      }
    });
    
   localStorage.setItem('uname',this.username);
   
   
  }
  
   
  
  goToSignup() {
    
    this.router.navigate(['/signup']);
  }
}
