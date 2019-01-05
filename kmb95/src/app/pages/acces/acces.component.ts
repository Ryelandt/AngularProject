import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.css']
})
export class AccesComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;
  accesAdm :any;
  accesPwd : any;
  user = {
    email:'',
    password: ''
  };
 
 
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router: Router) { 
  }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
    
    
  }
  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    
    console.log(this.user.email+this.user.password)
    this.submitted = true;
    this.accesAdm = this.loginForm.controls['email'].value;
    this.accesPwd = this.loginForm.controls['password'].value;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    // condition for admin
    // voir pour switch case
    if (this.accesAdm == 'admin@gmail.com' && this.accesPwd == 'admin95') {
     
    // connect to firebase for authentication with mail
        
        this.authService.login(this.user.email,this.user.password);
        this.user.email = this.user.password = '';
        this.router.navigate(['/dashboard']);
        
      
      
      
      }
  }
  

 
}
