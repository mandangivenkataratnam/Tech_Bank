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
}
