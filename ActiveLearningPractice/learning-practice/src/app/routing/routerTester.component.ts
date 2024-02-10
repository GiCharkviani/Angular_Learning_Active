import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'app-routerTester',
  standalone: true,
  imports: [],
  template: `
    <button (click)="toSelector()">To Selector</button>
  `,
  styles: ``
})
export class RouterTesterComponent {

  constructor(private readonly router: Router) {
    /* Router Native */
    // console.log(window.location, 'LOCATION')
    // console.log(window.history)
    // window.history.pushState({}, '', 'gaga')
  }

  public toSelector(): void {
    this.router.navigate(['selector'])
  }



}
