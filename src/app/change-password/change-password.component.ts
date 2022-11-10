import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../Services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
    this.ChangePasswordForm=this.fb.group({
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.ChangePasswordForm.valid){
      if(this.ChangePasswordForm.value.password === this.ChangePasswordForm.value.confirmPassword){
        console.log('Password is matching');
        // Implement the logic to send the password to backend..
      }
      else{
        alert("Password is not matching...");
      }
      // this.auth.login(this.loginForm.value)
      // .subscribe({
      //   next:(res)=>{
      //     alert(res.message);
      //    this.router.navigate(['mainmenu'])
      //   },
      //   error:(err)=>{
      //     alert(err?.error.message)
      //   }
      // })
    }
    else{
      //throw error
        this.validateAllFormFields(this.ChangePasswordForm);
        alert("Form is invalid")
    }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(fields=>{
      const control =formGroup.get(fields);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
}
