
export class MessageModel {
  name: string;
  message: string;
  react: number;
  clickerId: string[];
  picture: string;
  id:any;
  timeStamp:any;
  constructor(name: string, message:string, id:any,timeStamp:any, picture?:string, react?:number, clickerId?:string[]){
    this.name = name;
    this.message = message;
    this.picture = picture;
    this.id = id;
    this.react = react;
    this.clickerId = clickerId;
    this.timeStamp = timeStamp;
  }
}
