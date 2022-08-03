import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/users/user-http.service';
import { UserModel } from 'src/app/users/user.model';
import { ChatService } from './chat-http.service';
import { MessageModel } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe', { static: true }) private element: ElementRef;

  @ViewChild('forBackImage', { static: true }) private backImg: ElementRef;



  messages: MessageModel[] = [];
  currentUser: UserModel[] = [
    new UserModel('', '', '', '', '', 0, '', '', '', ''),
  ];
  private canDeactivateEl: boolean = false;
  canDeactiateElement:boolean = false;

  private subscription: Subscription;

  constructor(
    private chatStorageService: ChatService,
    private userService: UserService,
    private router: Router
  ) {

  }

  //მესიჯის გაგზავნა
  sendMessage(form: NgForm) {
    const userId = JSON.parse(sessionStorage.getItem('current-user'));
    const date = new Date();

    let newMessage = new MessageModel(
      this.currentUser[0].name,
      form.value.message,
      userId.localId,
      date,
      this.currentUser[0].picture,
      0,
      ['']
    );
    this.messages.push(newMessage);
    this.chatStorageService.toStorage(this.messages).subscribe();
    form.reset();
    this.scrollDown(0, 'auto');
    return false;
  }

  //რეაქტი
  catchReact(event: any) {
    this.messages[event.index].react += event.reactNum;
    let user = JSON.parse(sessionStorage.getItem('current-user')).localId;
    this.messages[event.index].clickerId.push(user);
    this.chatStorageService.toStorage(this.messages).subscribe();
  }

  //კომპონენტის ინიციალიზებისას
  ngOnInit() {
    this.getMessages();

    this.scrollDown(500, 'smooth');

    //გვერდის დარეფრეშების ინტერვალი
    setInterval(() => {
      this.subscription = this.chatStorageService
        .fromStorage()
        .subscribe((res) => {
          if (res !== null) {
            //რეაქტების შემოწმება ადგილობრივად
            let reacts = [];
            for (let i = 0; i < this.messages.length; i++) {
              reacts.push(this.messages[i].react);
            }
            reacts = reacts.reduce((accul, curr) => {
              return accul + curr;
            });

            //რეაქტების შემოწმება სერვერზე
            let reactsOnServer = [];
            for (let i = 0; i < res.length; i++) {
              reactsOnServer.push(res[i].react);
            }
            reactsOnServer = reactsOnServer.reduce((accul, curr) => {
              return accul + curr;
            });

            //გვერდის დარეფრეშების ქონდიშენი
            if (
              this.messages.length < res.length ||
              this.messages.length > res.length ||
              reacts > reactsOnServer ||
              reacts < reactsOnServer
            ) {
              this.messages = res;
              this.scrollDown(0, 'smooth');
              this.subscription.unsubscribe();
            }
          }
        });
    }, 1000);

    this.getUserInfo();
  }

  //სერვერიდან ინფოს მიღება
  getMessages() {
    this.chatStorageService.fromStorage().subscribe((res) => {
      if (res !== null) {
        this.messages = res;
      }
    });
  }

  //მიმდინარე მომხმარებლის დადგენა
  getUserInfo() {
    this.userService.getUserInfo().subscribe((res) => {
      this.currentUser = res.filter((fil) => {
        return (
          fil.otherInfo.localId ==
          JSON.parse(sessionStorage.getItem('current-user')).localId
        );
      });
      //სურათის ავტომატური ჩასმა
      this.backImg.nativeElement.style.backgroundImage = `url(${
        this.currentUser[0].picture.length > 6
          ? this.currentUser[0].picture
          : '../../../../assets/user/images.png'
      })`;
      this.backImg.nativeElement.style.backgroundSize = 'cover';
    });
  }


  yesBtn(){
    this.canDeactivateEl = true;
    this.onLogout()
    this.canDeactiateElement = false;
  }
  noBtn(){
    this.canDeactivateEl = false;
    this.canDeactiateElement = false;
  }

  //გასვლა
  onLogout() {
    this.canDeactiateElement = true
    if (this.canDeactivateEl) {
      //სტატუსის განახლება
      this.userService.getRegistratedUsers().subscribe((users) => {
        for (let i in users) {
          if (
            users[i].otherInfo.localId ===
            JSON.parse(sessionStorage.getItem('current-user')).localId
          ) {
            this.userService.userStatus(i, 'offline').subscribe();
            sessionStorage.removeItem('current-user');
            localStorage.removeItem('you-were-logged-in');
            this.userService.LoggedIn.next(false);
            this.router.navigate(['/login']);
            break;
          }
        }
      });
    }
  }

  //სქროლი
  scrollDown(time: number, behacior: string) {
    setTimeout(() => {
      this.element.nativeElement.scroll({
        top: this.element.nativeElement.scrollHeight,
        behavior: behacior,
      });
    }, time);
  }

  clear() {
    this.chatStorageService.clearAll().subscribe((res) => {
      window.location.reload();
    });
  }
}
