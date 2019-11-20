import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages = [
    {
      user: 'Simon',
      createdAt: 1554090856000,
      msg: 'Hey whats up mate?'
    },
    {
      user: 'Max',
      createdAt: 1554090956000,
      msg: 'Working on the Ionic mission, you?'
    },
    {
      user: 'Simon',
      createdAt: 1554091056000,
      msg: 'Doing some new stuffs'
    }
  ];

  currentUser = 'Simon';
  newMsg = '';

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push({
      user: this.currentUser,
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';
  }

}
