import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import { ILogin } from "./model/logins.models";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: any;
  router: any;


  constructor(private service: LoginService) { }

 
  
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    // console.log(email, password);
    this.auth.login(email, password).subscribe((res:any)=>{
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))

      // redirect to dashboard
      this.router.navigate(['/dashboard']);
    },
      (    err: any)=>{
      console.log(err);
    })

  }













}

