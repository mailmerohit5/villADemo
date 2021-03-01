import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/user/home',
      icon: 'home'
    },
    {
      title: 'Horoscope',
      url: '/user/horoscope',
      icon: 'planet'
    },
    {
      title: 'Blog',
      url: '/user/blog',
      icon: 'newspaper'
    },
    {
      title: 'Notifications',
      url: '/user/notification',
      icon: 'notifications'
    },
    {
      title: 'Wallet',
      url: '/user/addmoney',
      icon: 'wallet'
    },
    {
      title: 'Chat',
      url: '/user/chat',
      icon: 'chatbubbles'
    },
    {
      title: 'Call',
      url: '/user/call',
      icon: 'call'
    },
    {
      title: 'Mall',
      url: '/user/mall',
      icon: 'cart'
    },
    {
      title: 'Report',
      url: '/user/report',
      icon: 'document'
    },


  ];
  constructor() {}
}
