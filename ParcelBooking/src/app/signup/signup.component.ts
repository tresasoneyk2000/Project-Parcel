import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cred: Sign = new Sign("", "", "", "");

  passwordsMatch: boolean = true;

  emailMatch: boolean = true;
 
  constructor(private route: Router) {}

 

  ngOnInit() {}

 

  submit() {

    if (this.passwordsMatch === false) {
      alert("Invalid password");
    } else if (this.passwordsMatch === true && this.emailMatch === true) {
      this.route.navigate(['/login']);
    }

  }

 

  checkPasswords() {

    if (this.cred.password === this.cred.confirmpassword) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }

  }

 

  checkEmail() {

    if (this.cred.email.match("[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-zA-Z]{2,}")) {
      this.emailMatch = true;
    } else {
      alert("Invalid email");
      this.emailMatch = false;
    }

  }
}

  export class Sign {
    username: string ;
    email: string ;
    password: string;
    confirmpassword:string;
  
    constructor(parameusername: string,email: string, password: string,confirmpassword:string) {
      this.username=this.username;
      this.email=email;
      this.password=password;
      this.confirmpassword=confirmpassword;
    }
  }


  // constructor(private router: Router ,private formBuilder: FormBuilder) {}
   
  //   }
  //   // get username() {
    //   return this.signupForm.get('username');
    // }
  
    // get email() {
    //   return this.signupForm.get('email');
    // }
  
    // get password() {
    //   return this.signupForm.get('password');
    // }
  
  // ngOnInit() {
  //   this.signUpForm = new FormGroup({
  //     username: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   });
  // }
  // signup() {
  //   // Perform signup logic here
  //   console.log('Signup clicked');
  //   console.log('Name:', this.username);
  //   console.log('Email:', this.email);
  //   console.log('Password:', this.password);
  // }

  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }
 

  

//   usernameValue: string;
//   emailValue: string;
//   passwordValue: string;
//   signupForm: FormGroup;

//   constructor(private router: Router, private formBuilder: FormBuilder) {
//     this.signupForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   get username() {
//     return this.signupForm.get('username');
//   }

//   get email() {
//     return this.signupForm.get('email');
//   }

//   get password() {
//     return this.signupForm.get('password');
//   }

//   signup() {
//     // Perform signup logic here
//     console.log('Signup clicked');
//     console.log('Name:', this.usernameValue);
//     console.log('Email:', this.emailValue);
//     console.log('Password:', this.passwordValue);
//   }

//   goToLogin() {
//     this.router.navigate(['/login']);
//   }
// }
