import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {LoggerService} from "./logger.service";


@Component({
  selector: 'app-diTester',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
  providers: [
    {provide: UserService, useClass: LoggerService}
  ]
})
export class DiTesterComponent {

 constructor(userService: UserService) {
   // @ts-ignore
   userService!.log()
 }
}
