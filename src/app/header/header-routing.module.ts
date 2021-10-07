import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
 export const abcroutes: Routes = [
{
  path:'',redirectTo:'dashboard',pathMatch:'full'
},
{
  path:'dashboard',component:DashboardComponent
},
{
  path:'contact-us', component:ContactUsComponent
},
{
  path:'about-us',component:AboutUsComponent
},
{
  path:'company',loadChildren:()=>import('src/app/company/company.module').then(m=>m.CompanyModule)
},
{
  path:'employee',loadChildren:()=>import('src/app/employee/employee.module').then(m=>m.EmployeeModule)
}
];
@NgModule({
  imports: [RouterModule.forChild(abcroutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

