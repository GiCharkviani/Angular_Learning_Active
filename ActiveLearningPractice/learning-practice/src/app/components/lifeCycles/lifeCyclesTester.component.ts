import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-lifeCycles',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class LifeCyclesTesterComponent implements OnInit {

  ngOnInit() {
    console.log('ON_INIT')
  }

}
