import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../@service/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
headers={'additional-header':''};
  constructor(private httpClient:HttpClient,private auth:AuthService,private router:Router) {}
 ngOnInit(){

 }
 goToPage(url){
   this.router.navigate([url]);
 }
}
