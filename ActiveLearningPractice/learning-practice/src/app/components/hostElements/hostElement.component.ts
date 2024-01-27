import {Component} from "@angular/core";

@Component({
  selector: 'app-hostElements',
  standalone: true,
  imports: [
  ],
  template: `
    <h1>Host Element</h1>
  `,
  styles: ``,
  host: {
    'class': 'avto',
    '(click)': 'onClick($event)'
  }
})
export class HostElementComponent {

  onClick(value: any) {
    console.log(value)
  }
}
