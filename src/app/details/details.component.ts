import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  username:any;user:any;
  constructor(private service:LoginService){}

    getDetails(){
      console.log("ts"+this.username)
      this.service.getCustomerbyName(this.username).subscribe((res:any)=>{
        this.user = res;
        console.log(this.user)
    }
  )}

}
