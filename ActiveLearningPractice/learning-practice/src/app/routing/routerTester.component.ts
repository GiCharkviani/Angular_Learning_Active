import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
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
export class RouterTesterComponent implements OnChanges {
  @Input() userName!: any;

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes, 'CHANGES')
  }

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
    // console.log('ROUTER_TESTER_CREATED')
    /* Router Native */
    // console.log(window.location, 'LOCATION')
    // console.log(window.history)
    // window.history.pushState({}, '', 'gaga')
    this.activatedRoute.data.subscribe(data => console.log(data, 'ROUTE_DATA'))
  }

  public toSelector(): void {
    // /router/selector
    this.router.navigate(['selector'], {relativeTo: this.activatedRoute});
  }



}
