import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private _fb:FormBuilder,private common:CommonService) { }
  registerForm!:FormGroup;
  ngOnInit() {
    this.registerForm=this._fb.group(
      {
        id:[],
        empname:[''],
        email:[''],
        mobileno:[''],
        designation:[''],
        username:[''],
        password:['']


      }
    )
  }
  onSubmit()
  {
    this.common.submitEmployee(this.registerForm.value).subscribe();
  }
}
