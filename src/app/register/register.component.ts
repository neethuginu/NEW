import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname="";
  lname="";
  email="";
  mobile="";
  pswd="";
  cpswd="";

  registerForm=this.fb.group({
    fname:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lname:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    mobile:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    cpswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  }) 

  constructor(private dataService: DataService,private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register(){     

      if (this.registerForm.valid) {
        console.log(this.registerForm)
        this.dataService.register(this.registerForm.value.fname, this.registerForm.value.lname, this.registerForm.value.email, this.registerForm.value.mobile, this.registerForm.value.pswd, this.registerForm.value.cpswd)
        .subscribe(data=> {
            if (data) {
              alert("register suceesful,pls login")
              this.router.navigateByUrl("");
  
            }
          },(data)=>{
  
          alert(data.error.message);
          })
  
      }
      else {
        alert("form invalid")
      }
  
  
    }
  
  }


