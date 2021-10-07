import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private common:CommonService,private location:Location) { }
upadateForm!:FormGroup;
  ngOnInit() {
  
    this.upadateForm=this.fb.group({
      id:[],
        empname:[''],
        email:[''],
        mobileno:[''],
        designation:[''],
        username:[''],
        password:['']

    });
   this.editadata();
    
  }
editadata()
{
  let empobj:any=this.location.getState();

console.log(empobj.id);
if(empobj.id!=0)
{
 
  this.upadateForm.get('id')?.setValue(empobj.id);
  this.upadateForm.get('empname')?.setValue(empobj.empname);
  this.upadateForm.get('email')?.setValue(empobj.email);
  this.upadateForm.get('designation')?.setValue(empobj.designation);
  this.upadateForm.get('username')?.setValue(empobj.username);
  this.upadateForm.get('password')?.setValue(empobj.password);
  this.upadateForm.get('mobileno')?.setValue(empobj.mobileno);

}
}
onSubmit(){

this.common.updateEMployee(this.upadateForm.value).subscribe();
}
}
