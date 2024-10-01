import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  constructor(private router:Router){}
  user:any;username:any;
  ngOnInit(){
    if(localStorage.getItem('loginuser')==null)
    {
      this.router.navigateByUrl('/login');
    }
    else{
      this.user = JSON.parse(localStorage.getItem('loginuser')||'{}');
      this.username = this.user.username;
    }
  }
}
