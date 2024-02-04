import {Component} from "@angular/core";
import {UserService} from "./user.service";


@Component({
  selector: 'app-inputProperties',
  standalone: true,
  imports: [],
  template: `

  `,
  styles: ``,
  providers: [UserService]
})
export class DiTesterComponent {
 constructor(private userService: UserService) {
 }
}
