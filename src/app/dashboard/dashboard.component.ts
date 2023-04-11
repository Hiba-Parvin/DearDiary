import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userid: any

  today: any
  diaryentry: any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    //Accessing Data From DataService And Storing In A Variable
    this.userid = localStorage.getItem("currentuser")
    this.today = new Date()
  }


  ngOnInit(): void {
    // if(!localStorage.getItem("currentacno")){
    //   alert("Please Login !")
    //   this.router.navigateByUrl("")
    // }
  }

  // diaryForm=this.fb.group({
  //   diaryentry:['', [Validators.required]]
  // })
  diarypost(event: any) {
    this.diaryentry = event.target.value
  }
  diary() {
    // var diaryentry=this.diaryForm.value.diaryentry
    // console.log(this.userid,diaryentry);
    // if (this.diaryForm.valid) {
    console.log("If Loop ", this.userid, this.diaryentry);
    this.ds.diary(this.userid, this.diaryentry).subscribe((result: any) => {
      console.log("fn call ", this.userid, this.diaryentry);
      alert(result.message)
    },
      result => {
        alert(result.error.message)
      })
  }
  logout(){
    localStorage.removeItem("userid")
    this.router.navigateByUrl("")
  }

}

