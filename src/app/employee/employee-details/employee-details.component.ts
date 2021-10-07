import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private routes:ActivatedRoute,private common:CommonService) { }

  employeeobj:Employee;

  ngOnInit() {
    this.routes.paramMap.subscribe(param1=>
      {
        this.common.getEmployee(parseInt(param1.get('id'))).subscribe(
          data=>{
            this.employeeobj=data;
                })
      })
  }

}
