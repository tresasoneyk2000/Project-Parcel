import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Signup } from '../model/signup';
import { SignupService } from '../signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  username:string;
    email:string;
    password:string;
    signup1:Signup;
    successMessage:string;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private signupservice:SignupService) { }
  
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  
  onSubmit() {
   
    if (this.registrationForm.valid) {
      // Process the form submission
      this.signup1= {username:this.username,email:this.email,password:this.password};
      console.log(this.signup1);
      
      this.signupservice.addParcel(this.signup1).subscribe(data=>{
      this.successMessage='yghjkjkh';
      this.router.navigate(['/login']);

      },
    //  this.signupservice.addParcel(this.signup1).subscribe(data=>{

    //   this.successMessage = 'Parcel added successfully';
      // alert(this.successMessage);
     

     error=>{

      console.log('error');

     });
    }
      // Display alert
      // alert('Registration successful!');
      
      // Navigate to the login component
     
    
  }
  
  passwordMatchValidator(control: AbstractControl) {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ passwordsMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
  // registrationForm: FormGroup;
  // passwordsMatch = true;

  // constructor(private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.createRegistrationForm();
  // }

  // createRegistrationForm() {
  //   this.registrationForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]], // Add Validators.email for email validation
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmpassword: ['', Validators.required]
  //   });
  //   const emailControl = this.registrationForm.get('email');
  //   if (emailControl) {
  //     emailControl.valueChanges
  //        // Add a debounce time of 500 milliseconds
  //       .subscribe(() => {
  //         this.checkEmail();
  //       });
  //   }

  //   const confirmPasswordControl = this.registrationForm.get('confirmpassword');
  //   if (confirmPasswordControl) {
  //     confirmPasswordControl.valueChanges.subscribe(() => {
  //       this.checkPasswords();
  //     });
  //   }
  // }

  // checkEmail() {
  //   const emailControl = this.registrationForm.get('email');
  //   if (emailControl && emailControl.errors && emailControl.errors['email']) {
  //     // Display alert for invalid email
  //     alert('Invalid email');
  //   }
  // }
  

  // checkPasswords() {
  //   const passwordControl = this.registrationForm.get('password');
  //   const confirmPasswordControl = this.registrationForm.get('confirmpassword');
  //   if (passwordControl && confirmPasswordControl) {
  //     const password = passwordControl.value;
  //     const confirmPassword = confirmPasswordControl.value;
  //     this.passwordsMatch = password === confirmPassword;
  //   }
  // }

  // onSubmit() {
  //   if (this.registrationForm.invalid || !this.passwordsMatch) {
  //     return;
  //   }

  //   // Perform form submission logic here
  //   alert('Form submitted successfully!');
  // }

  // jhcb
//   cred: Sign = new Sign("", "", "", "");

//   passwordsMatch: boolean = true;

//   emailMatch: boolean = true;
 
//   constructor(private route: Router) {}

 

//   ngOnInit() {}

 

//   submit() {

//     if (this.passwordsMatch === false) {
//       alert("Invalid password");
//     } else if (this.passwordsMatch === true && this.emailMatch === true) {
//       this.route.navigate(['/login']);
//     }

//   }

 

//   checkPasswords() {

//     if (this.cred.password === this.cred.confirmpassword) {
//       this.passwordsMatch = true;
//     } else {
//       this.passwordsMatch = false;
//     }

//   }

 

//   checkEmail() {

//     if (this.cred.email.match("[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-zA-Z]{2,}")) {
//       this.emailMatch = true;
//     } else {
//       alert("Invalid email");
//       this.emailMatch = false;
//     }

//   }
// }

//   export class Sign {
//     username: string ;
//     email: string ;
//     password: string;
//     confirmpassword:string;
  
//     constructor(parameusername: string,email: string, password: string,confirmpassword:string) {
//       this.username=this.username;
//       this.email=email;
//       this.password=password;
//       this.confirmpassword=confirmpassword;
//     }
//   }


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
