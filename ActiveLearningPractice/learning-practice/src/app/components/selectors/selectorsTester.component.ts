import {Component} from "@angular/core";
import {ButtonComponent} from "./button.component";

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <button (click)="view($event)" type="reset">Reset</button>

    <button (click)="view($event)" type="submit">Submit</button>
  `
})
export class SelectorsTesterComponent {

  view(data: any) {
    console.log(data)
  }
}
