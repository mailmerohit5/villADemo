import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../@service/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  headers={'additional-header':''};
  loggedIn=false;
  email;
  pwd;
    constructor(private httpClient:HttpClient,private auth:AuthService,private router:Router) {}
    login(){
      const payload={'email':this.email,'password':this.pwd};
      this.httpClient.post(`${environment.apiEndPoint}/login`,payload,{headers:this.headers}).subscribe((data:any)=>{
      if(data.status==200){
        this.auth.logIn(data.data.user);
        console.log(data);
        this.loggedIn=true;
        this.router.navigate(['home']);
      }
     });

    }
}
