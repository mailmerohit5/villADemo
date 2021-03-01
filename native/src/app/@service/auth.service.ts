import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user;
public chatWith;
  constructor() { }

  logIn(user){
    this.user=user;
  }

 chatWithUser(user){
   this.chatWith=user;
 }
}

