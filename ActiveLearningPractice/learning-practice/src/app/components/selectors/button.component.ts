import {Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'button[type="submit"]',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  template: `
    <button mat-raised-button>New Button</button>
  `
})
export class ButtonComponent {

}
