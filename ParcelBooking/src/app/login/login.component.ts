import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  email: string | undefined;
  password: string | undefined;

  login() {
    // Perform login logic here
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
