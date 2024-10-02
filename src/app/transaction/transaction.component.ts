import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  recieverId:any;
  amount:any;
  password:any;
  senderId:any;
user:any;
constructor(private router:Router,private service:DataService){}
  ngOnInit(){
    if(localStorage.getItem('loginuser')==null)
    {
      this.router.navigateByUrl('/login');
    }
    else{
      this.user = JSON.parse(localStorage.getItem('loginuser')||'{}');
      this.senderId = this.user.id;
    }
  }

  sendAmount(){
    this.user = {
      "senderId":this.senderId,
      "receiverId":this.recieverId,
      "amount":this.amount,
      "password":this.password
  }
  console.log(this.user);
  this.service.sendAmount(this.user).subscribe((res:any)=>{
    alert(res.message);
    this.router.navigateByUrl('/customer/home');
  })
}


}
