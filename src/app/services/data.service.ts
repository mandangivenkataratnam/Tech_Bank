import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBranches(){
    return this.http.get('http://localhost:4300/branches',{responseType:'json'});
  }

  sendAmount(user:any){
    return this.http.post('http://localhost:4300/users/transaction',user,({responseType:'json'}));
  }

  getSpendings(userid:any){
    return this.http.get('http://localhost:4300/users/spendings/'+userid,{responseType:'json'});
  }
  getEarnings(userid:any){
    return this.http.get('http://localhost:4300/users/earnings/'+userid,{responseType:'json'});
  }
}
