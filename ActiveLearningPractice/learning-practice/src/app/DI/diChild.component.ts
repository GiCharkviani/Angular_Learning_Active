import {Component, Optional, Self} from "@angular/core";
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-diChild',
  standalone: true,
  imports: [],
  template: `
        <p>I am child DI</p>
  `,
  styles: ``,
  providers: [

  ]
})
export class DiChildComponent {
  constructor(@Self() @Optional() private authService: AuthService) {
    console.log(this.authService.userStatus())
  }
}
