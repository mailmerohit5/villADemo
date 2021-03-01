import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Talk from 'talkjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
 private currentUser: Talk.User;
  constructor(private auth:AuthService) { }

  async createUser(applicationUser: any) {
    console.log(applicationUser,'Creating USer');
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id + '',
      name: applicationUser.name,
      photoUrl: applicationUser.avatar,
      //role: applicationUser.role
      role: 'booker'
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    // const user = {
    //   id: this.auth.user.id,
    //   username: this.auth,
    //   email: 'demo@talkjs.com',
    //   photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
    //   welcomeMessage: 'Hey there! How are you? :-)',
    //   role: 'booker'
    // };
    console.log(this.auth.user);
    const user=this.auth.user;
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: environment.talkjs.appId,
         me: this.currentUser
    });
    return session;
  }
  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(session: Talk.Session) {
    const otherApplicationUser = this.auth.chatWith;
    console.log(this.auth.chatWith);
    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    return session.createInbox({selected: conversation});
 }



}
