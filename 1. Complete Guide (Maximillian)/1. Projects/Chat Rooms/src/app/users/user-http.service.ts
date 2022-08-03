import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';


interface user {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface userResponseInfo {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {

  LoggedIn = new BehaviorSubject<boolean>(false)


  constructor(private http: HttpClient) {}

  registrate(user: user) {
    return this.http.post<userResponseInfo>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCecwrY9R7RL21I8gWBFd8DBn8D6MtVR1c',
      {
        email: user.email,
        password: user.password,
        returnSecureToken: user.returnSecureToken,
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCecwrY9R7RL21I8gWBFd8DBn8D6MtVR1c',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }

  getUserInfo() {
    return this.http
      .get('https://chat-rooms-45cf5-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map(res => {
          const user = [];
          for (let i in res) {
            user.push(res[i]);
          }
          return user
        })
      );
  }

  saveRegistratedUser(user: UserModel) {
    return this.http.post(
      'https://chat-rooms-45cf5-default-rtdb.firebaseio.com/users.json',
      user
    );
  }

  getRegistratedUsers(){
    return this.http.get<UserModel>('https://chat-rooms-45cf5-default-rtdb.firebaseio.com/users.json')
  }

  userStatus(user:string, status: string){
   return this.http.patch(
      `https://chat-rooms-45cf5-default-rtdb.firebaseio.com/users/${user}.json`,
      {
        "status": status
      }
    );
  }

}
