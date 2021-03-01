import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../@service/auth.service';
import { ProductService } from '../@service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
product;
users;
  constructor(private pr:ProductService,private httpClient:HttpClient,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.product=this.pr.product;
    this.httpClient.get(`${environment.apiEndPoint}/getUsers`).subscribe((data:any)=>{
      if(data.status==200){
        // this.auth.logIn(data.data);
        // console.log(data);
        this.users=data.data;
        //this.router.navigate(['home']);
      }
     });



  }

  selectChatWith(user){
    console.log(user);
    this.auth.chatWithUser(user);
    setTimeout(()=>{
      console.log(user);
      this.router.navigate(['chat']);
    },100);
  }

}
