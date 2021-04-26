import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;


  
 accountDetails:any = {
  1000: { fname: "neethu",lname:"jinu",email: "neethu@gmail.com", mobile: "658741255",password:"123" },
  1001: { fname: "jinu",lname:"jinu",email: "jinu@gmail.com", mobile: "658742255",password:"321" },
}
  
currentUser: any;
// saveDetails(){
//   localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
//   if(this.currentUser){
//     localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
//   }
// }

//   getDetails() {
//     if (localStorage.getItem("accountDetails")) {
//       this.accountDetails = JSON.parse(localStorage.getItem("accountDetails") || '')
//     }
//     if (localStorage.getItem("currentUser")) {
//       this.currentUser = localStorage.getItem("currentUser")
//     }
//   }

  constructor(private http:HttpClient) { }
  
register(fname: any, lname: any, email: any,mobile:any,pswd:any,cpswd:any) {
  const data:any = {
    fname,
    lname,
    email,
    mobile,
    pswd,
    cpswd

  }
   return this.http.post("http://localhost:3000/register",data)
   }


login(email: any, password: any) {
  const data:any = {
   email,          
    password
  }
   return this.http.post("http://localhost:3000/login",data)
   

}

}
