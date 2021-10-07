import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';


console.log("service.......loaded");
@Injectable({
  providedIn: 'root'
})
export class CommonService {
 url:string=' http://localhost:3000/Employee';

 loginurl:string="http://localhost:8090/api/login";
  constructor(private http:HttpClient) { }
submitEmployee(emp:Employee):Observable<Employee>
{
  return this.http.post<Employee>("http://localhost:8090/api/regEmp",emp);
  
}
getdata():Observable<Employee[]>
{
return this.http.get<Employee[]>("http://localhost:8090/api/getAllEmp");
}
updateEMployee(emp:Employee):Observable<Employee>
 {
   return this.http.put<Employee>(this.url+"/"+emp.id,emp);
}
deletEmployee(id:number):Observable<number>
{
  console.log("execute")
  return this.http.delete<number>("http://localhost:8090/api/delete/"+id);

}
getEmployee(id:number):Observable<Employee>
{
  
return this.http.get<Employee>(this.url+"/"+id);

}
}


