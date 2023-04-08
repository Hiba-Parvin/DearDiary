import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  //Model For Register Form
  registerForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    lname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    userid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    email: ['', [Validators.required]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  ngOnInit(): void {

  }

  register() {
    var fname = this.registerForm.value.fname
    var lname = this.registerForm.value.lname
    var userid = this.registerForm.value.userid
    var email = this.registerForm.value.email
    var psw = this.registerForm.value.psw
console.log(fname,lname,userid,psw);

    if (this.registerForm.valid) {
      this.ds.register(fname,lname,userid,psw).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("")
      },
      result=>{
        alert(result.error.message) 
      })
      }
      else {
        alert("Invalid Form !")
      }
    }

}
