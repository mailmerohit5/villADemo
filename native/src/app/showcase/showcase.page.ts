import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../@service/auth.service';
import { ProductService } from '../@service/product.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.page.html',
  styleUrls: ['./showcase.page.scss'],
})
export class ShowcasePage implements OnInit {
  products
  constructor(private httpClient:HttpClient,private auth:AuthService,private router:Router,private productService:ProductService) {}
  ngOnInit(){
    //const payload={'email':this.email,'password':this.pwd};
    this.httpClient.get(`${environment.apiEndPoint}/allProduct`).subscribe((data:any)=>{
    if(data.status==200){
      // this.auth.logIn(data.data);
      console.log(data);
      this.products=data.data;
      //this.router.navigate(['home']);
    }
   });

  }
  loadProduct(product){
    this.productService.product=product;
    this.router.navigate(['product']);
  }
}
