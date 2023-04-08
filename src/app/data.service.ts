import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

currentuser:any
  constructor(private http:HttpClient) { }

  register(fname:any,lname:any,userid:any, psw: any) {
    const data={fname,lname,userid,psw}
    return this.http.post('http://localhost:3000/register',data)
      }
    
      login(userid: any, psw: any) {
    const data={userid,psw}
    return this.http.post('http://localhost:3000/login',data)
      }
}
