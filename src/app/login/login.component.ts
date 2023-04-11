import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  loginForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]]
  })

  login() {
    var userid = this.loginForm.value.userid
    var psw = this.loginForm.value.psw
    if (this.loginForm.valid) {
      this.ds.login(userid, psw).subscribe((result:any)=>{
        localStorage.setItem("currentuser",result.currentuser)
        localStorage.setItem("token",JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl("dashboard")
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
  
    else {
      alert("Invalid Form")
    }
}
}