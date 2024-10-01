import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private db: LoginService, private data:DataService, private myrouter: Router) { }
  user: any;
  username: any;
  email: any;mobile:any;gender:any;accounttype:any;branch:any;
  availableBalance:any;
  password: any;
  confirmPassword: any;selectedBranchId:any
  branches:any;
  branchNames:any
 
  ngOnInit(){
    this.data.getBranches().subscribe((res)=>{
      this.branches = res;
      console.log(this.branches);

    })
   
  }

  registernow() {
    if (this.password === this.confirmPassword) {
      this.user = {
        "name": this.username,
        "email": this.email,
        "password": this.password,
        "mobile":this.mobile,
        "gender":this.gender,
        "accountType":this.accounttype,
        "branch":this.selectedBranchId,
        "availableBalance":this.availableBalance,
        "role":"customer"
      };

      this.db.signup(this.user).subscribe(
        (res: any) => {
          alert(res.message); // Display the message property from the response
          //localStorage.setItem("loginuser", JSON.stringify(this.user));
          // Redirect or perform other actions on successful registration
          this.myrouter.navigateByUrl("/login");
        },
        (error) => {
          console.error(error);
          if (error.error && error.error.error) {
            alert(error.error.error); // Display the error message from the response
          } else {
            alert("Error occurred while signing up."); // Display a generic error message
          }
        }
      );
    }
  }
}
