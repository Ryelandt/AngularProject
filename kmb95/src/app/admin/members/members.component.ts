import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  accesAdm :any;
  accesPwd : any;
  user = {
    email:'',
    password: ''
  };
 
 
  constructor( private formBuilder: FormBuilder,public authService:AuthService, private db: AngularFireDatabase) { 
   
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  get f() { 
    return this.registerForm.controls; 
  }
  
  onSubmit() {
   
    console.log(this.user.email+this.user.password)
    this.submitted = true;
    this.accesAdm = this.registerForm.controls['email'].value;
    this.accesPwd = this.registerForm.controls['password'].value;
    if (this.registerForm.invalid) {
      return;
  }
    this.authService.create(this.user.email,this.user.password);
    
    
   
    
  }

}
