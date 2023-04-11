import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-diaryentry',
  templateUrl: './diaryentry.component.html',
  styleUrls: ['./diaryentry.component.css']
})
export class DiaryentryComponent {
  journalArray:any
  constructor(private ds:DataService){
  this.ds.getDiary((localStorage.getItem("currentuser") || "")).subscribe((result:any)=>{
    this.journalArray=result.journal
  })
  }

  ngOnInit(): void {
    
  }

}
