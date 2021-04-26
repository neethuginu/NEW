import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  pswd = "";
  loginForm = this.fb.group({

    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],


  })

  constructor(private router: Router, private fb: FormBuilder,private dataService: DataService) { }

  ngOnInit(): void {
  }
  getemail(event: any) {
    this.email = event.target.value;
    // console.log(this.accno);
  }
  pswdChange(event: any) {
    this.pswd = event.target.value;
    // console.log(this.pswd);
  }
  login() {
    if (this.loginForm.valid) {
      var email= this.loginForm.value.accno;
      var pwd = this.loginForm.value.pswd;
      this.dataService.login(email, pwd)
      .subscribe
        ((data:any)=> {
          if (data) {
            alert(data.message) ;
            localStorage.setItem("name",data.name)
            this.router.navigateByUrl("");

          }
        }, (data) => {
          alert(data.error.message);
        })   

    }
    else {
      alert("invalid form")
    }


  }
}



