import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


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

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
    console.log('ROUTER_TESTER_CREATED')
    /* Router Native */
    // console.log(window.location, 'LOCATION')
    // console.log(window.history)
    // window.history.pushState({}, '', 'gaga')
  }

  public toSelector(): void {
    // /router/selector
    this.router.navigate(['selector'], {relativeTo: this.activatedRoute});
  }



}
