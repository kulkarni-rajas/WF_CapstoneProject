import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
      this.loginForm=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)

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
        this.validateAllFormFields(this.loginForm);
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