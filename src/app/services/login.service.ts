import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  signup(user:any){
    return this.http.post('http://localhost:4300/users/registration',user,({responseType:'json'}));
  }

  login(user:any){
    return this.http.post('http://localhost:4300/users/login',user,({responseType:'json'}));
  }

  getUsers(userid:any){
    return this.http.get('http://localhost:4300/users/customer/'+userid,{responseType:'json'});
  }
  getCustomerbyName(username:any){
    console.log(username)
    return this.http.get('http://localhost:4300/customerbyName/'+username,{responseType:'json'});
  }


}
