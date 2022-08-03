import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { MessageModel } from "./message.model";

@Injectable()

export class ChatService  {

  constructor(private http: HttpClient){}

  toStorage(message: MessageModel[]){
    return this.http.put<MessageModel[]>('https://chat-rooms-45cf5-default-rtdb.firebaseio.com/messages.json', message)
  }

  fromStorage(){
    return this.http.get<MessageModel[]>('https://chat-rooms-45cf5-default-rtdb.firebaseio.com/messages.json')
  }

  deleteMessage(index: number){
    return this.http.delete(`https://chat-rooms-45cf5-default-rtdb.firebaseio.com/messages/${index}.json`)
  }

  clearAll(){
    return this.http.delete('https://chat-rooms-45cf5-default-rtdb.firebaseio.com/messages.json')
  }

  giveLikes(index:number, oneLike:any){
    return this.http.put(`https://chat-rooms-45cf5-default-rtdb.firebaseio.com/messages/${index}/react.json`, oneLike)
  }

}
