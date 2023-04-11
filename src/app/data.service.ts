import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//Create global header for overload header
const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

currentuser:any
  constructor(private http:HttpClient) { }

  getToken(){
    //Accessing Token
    const token=JSON.parse(localStorage.getItem("token") || "")
    //Generate header
    let headers=new HttpHeaders()
    //check if token is accessed or not
    if(token){
      //add token to headers using append method
      option.headers=headers.append('access_token',token)
    }
    return option
  }

  register(fname:any,lname:any,userid:any, psw: any) {
    const data={fname,lname,userid,psw}
    return this.http.post('http://localhost:3000/register',data)
      }
    
      login(userid: any, psw: any) {
    const data={userid,psw}
    return this.http.post('http://localhost:3000/login',data)
      }

      diary(userid:any,diaryentry: any) {
        console.log("DIARY API CALL",userid,diaryentry);
        
        const data={userid,diaryentry}
        return this.http.post('http://localhost:3000/diary',data,this.getToken())
      }

      getDiary(userid: any) {
        const data={userid}
        return this.http.post('http://localhost:3000/diaryentries',data,this.getToken())
      }
    
      deleteAcc(userid:any){
        return this.http.delete('http://localhost:3000/delete/'+userid,this.getToken())
      }
}
