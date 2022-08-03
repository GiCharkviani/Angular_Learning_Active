import { Component, OnChanges, OnInit } from "@angular/core";
import { UserService } from "src/app/users/user-http.service";
import {map} from 'rxjs/operators'
import { UserModel } from "src/app/users/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users: UserModel[] = []

  constructor(private userService: UserService){}

  getUsers(){
    this.userService.getRegistratedUsers().pipe(map(res=>{
      const users = []
      for(let i in res){
        users.push(res[i])
      }
      return users
    })).subscribe(res => {
      this.users = res
    })
  }

  ngOnInit(){
  this.getUsers()
  }


}
