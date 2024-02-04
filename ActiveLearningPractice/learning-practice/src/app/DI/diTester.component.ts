import {Component} from "@angular/core";
import {UserService} from "./user.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: `

  `,
  styles: ``,
  providers: []
})
export class DiTesterComponent {

 constructor(userService: UserService) {
 }
}
