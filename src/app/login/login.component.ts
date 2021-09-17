import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userid = 'abc';
  pass = 'abc';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  signUp(email:string, password:string){
    if(email === "" || password === ""){
      Swal.fire({title:'Please fill the details',icon:'warning'})
    }
    else{
      this.userid=email;
      this.pass=password;
      Swal.fire({title:'Registration successfull',icon:'success'})
    }
  }


  signIn(email:string, password:string){
    if(email==this.userid && password==this.pass){
      Swal.fire({title:'Successfully Logged In',icon:'success'})
      this.router.navigate(['/nav']);
    }
    else{
      Swal.fire({title:'Invalid Email/Password',icon:'error'})
    }
  }

}
