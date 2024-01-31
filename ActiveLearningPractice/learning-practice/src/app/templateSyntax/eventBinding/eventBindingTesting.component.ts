import {
  Component
} from "@angular/core";


@Component({
  selector: 'app-childQuery',
  standalone: true,
  imports: [
  ],
  template: `
    <button (click)="name = 'Vazha'">Change Name</button>
    <h1>{{name}}</h1>
  `,
  styles: ``
})
export class EventBindingTestingComponent {
  public name: string = 'Gela';

}
