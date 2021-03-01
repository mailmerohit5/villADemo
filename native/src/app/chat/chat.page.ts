import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Talk from 'talkjs';
import { TalkService } from '../@service/talk.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;
  private inbox: Talk.Inbox;
  private session: Talk.Session;
  constructor( private talkService: TalkService,) {}

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();//Auth USer
    this.inbox = await this.talkService.createInbox(session);//Ui
    this.inbox.mount(this.talkjsContainer.nativeElement);//render
  }
}
