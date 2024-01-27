import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'app-inputProperties',
  standalone: true,
  imports: [],
  template: `
        <div (click)="onClick($event)">
          <ul>
            <li (click)="onClick($event)">Item</li>
          </ul>
        </div>
  `,
  styles: ``
})
export class OutputPropertiesTesterComponent implements OnInit {

  ngOnInit() {
  }

  onClick(event: any) {
    console.log(event)
    console.log(event.eventPhase, 'PHASE')
    // event.cancelBubble = true;
  }
}
