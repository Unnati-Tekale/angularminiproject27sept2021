import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';


console.log("employee module loaded");
@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    UpdateComponent
   
  
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
