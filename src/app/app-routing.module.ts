import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';abcroutes
import { abcroutes } from './header/header-routing.module';
import { HeadercontentComponent } from './header/headercontent/headercontent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{
  path:'',redirectTo:'login',pathMatch:'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'login/register', component:RegisterComponent
},
{
  path:'login/header',component:HeadercontentComponent,children:abcroutes
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
