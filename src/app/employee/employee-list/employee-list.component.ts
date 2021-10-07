import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  constructor(private common:CommonService,private locations:Location) { }
emplist!:Employee[];
  ngOnInit() {
this.common.getdata().subscribe(list=>{
this.emplist=list;
})
  }
  getback(){
this.locations.back();
  }
 deleteemployee(id:number)
  {
this.common.deletEmployee(id).subscribe();
  }
}
