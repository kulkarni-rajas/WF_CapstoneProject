import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type: string ="password";
  isText: boolean=false;
  eyeIcon: string="fa-eye-slash";
  signupForm!: FormGroup;
  constructor(private fb:FormBuilder, private auth: AuthService) { }
  

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      accountType:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  hideShowPass()
{this.isText=!this.isText;
  this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
  this.isText? this.type="text" : this.type="password";

}

onSignup(){
  this.auth.signUp(this.signupForm.value)
  .subscribe({
    next: (res)=>{
      alert(res.message)
    },
    error:(err) => {
      alert(err?.error.message)
    }
  })
  // if(this.signupForm.valid){
   // console.log(this.signupForm.value)
  // }
  // else{
  //   alert("invalid fields")
  // }
}

}
