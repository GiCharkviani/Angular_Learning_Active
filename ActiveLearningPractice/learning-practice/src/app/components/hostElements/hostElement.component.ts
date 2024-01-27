import {Component, HostBinding, HostListener} from "@angular/core";

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
  @HostBinding('attr.aria-label')
  protected ariaLabel = 'rame';

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    console.log(event)
  }

  onClick(value: any) {
    console.log(value)
  }
}
