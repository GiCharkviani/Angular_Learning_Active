import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string;
  success: string;
  loading:boolean = false;
  alertAfterAutoLogOut:boolean = false;
  constructor(private router: Router, private userService: UserService) {}

  //ავტორიზაციის ფუნქცია
  onSubmit(loginInputs: NgModel) {
    this.loading = true;
    this.userService
      .login(loginInputs.value.email, loginInputs.value.password)
      .subscribe(
        (res) => {
          this.onLogin(
            res,
            loginInputs.value.email,
            loginInputs.value.password
          );
          this.loading = false;
        },
        //ერორ ჰენდლინგი
        (error) => {
          switch (error.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              this.error = 'იმეილი ან პაროლი არასწორია';
              break;
            case 'INVALID_PASSWORD':
              this.error = 'იმეილი ან პაროლი არასწორია';
              break;
            case 'USER_DISABLED':
              this.error = 'მომხმარებელი შეზღუდულია';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
              this.error = 'თქვენი ანგარიში დაიბლოკა';
              break;
            default:
              this.error = error.error.error.message;
              break;
          }
          this.loading = false;
        }
      );
  }

  onLogin(res, email:string, password:string) {

    localStorage.setItem(
      'you-were-logged-in',
      JSON.stringify({
        res: res,
        email: email,
        password: password,
      })
    );
    sessionStorage.setItem('current-user', JSON.stringify(res));
    this.userService.LoggedIn.next(true);
    //სტატუსის განახლება
    this.userService.getRegistratedUsers().subscribe((users) => {
      for (let i in users) {
        if (
          users[i].otherInfo.localId ===
          JSON.parse(sessionStorage.getItem('current-user')).localId
        ) {
          this.userService.userStatus(i, 'online').subscribe();
          break;
        }
      }
      this.router.navigate(['/chat']);
    });
  }

  onRegister() {
    this.router.navigate(['/registration']);
  }

  ngOnInit() {
    if(localStorage.getItem('you-were-logged-in')){
      this.userService.getRegistratedUsers().subscribe((users) => {
        for (let i in users) {
          if (
            users[i].otherInfo.localId ===
            JSON.parse(localStorage.getItem('you-were-logged-in')).res.localId
          ) {
            this.userService.userStatus(i, 'offline').subscribe();
            this.alertAfterAutoLogOut = true;
            break;
          }
        }
      });
    }
  }

  LogInAgain() {
    this.alertAfterAutoLogOut = false;

    console.log(JSON.parse(localStorage.getItem('you-were-logged-in')).email)

    console.log(JSON.parse(localStorage.getItem('you-were-logged-in')).password)

    this.userService
      .login(
        JSON.parse(localStorage.getItem('you-were-logged-in')).email,
        JSON.parse(localStorage.getItem('you-were-logged-in')).password
      )
      .subscribe((res) => {
        this.onLogin(
          res,
          JSON.parse(localStorage.getItem('you-were-logged-in')).email,
          JSON.parse(localStorage.getItem('you-were-logged-in')).password
        );

      }
      );
  }
}
