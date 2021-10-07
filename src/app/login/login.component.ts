import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _fb:FormBuilder,private route:Router,private common:CommonService) { }
  loginForm!:FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm()
  {
 this.loginForm=this._fb.group(
  {
    userName:['', Validators.required],
    password:['', Validators.required]
  }
)
  }
onLoginSubmit()
  {
    this.common.getdata().subscribe(list=>{
      for(let emp1 of list)
      {
        if(this.loginForm.get('userName')?.value==emp1.username &&this.loginForm.get('password')?.value==emp1.password){
          this.route.navigate(['login/header']);
        }
      }
      
    })
   

  
  }

}