import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  signup() {
    // Perform signup logic here
    console.log('Signup clicked');
    console.log('Name:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
