import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { MessageModel } from '../message.model';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css'],
})
export class ChatItemComponent implements OnInit {
  @Input() messageItem: MessageModel;
  @Input() index: number;

  @Output() reacted = new EventEmitter<any>()


  constructor(){}

  onLike(){
    this.reacted.emit({
      reactNum: 1,
      index: this.index
    })
  }


  ngOnInit(){

  }
}
