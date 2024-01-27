import {Component} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule
  ],
  template: `
    <label for="brogrammers">BroGrammers</label>
    <select name="brogrammers" id="brogrammers">
        <ng-content select=".gela"></ng-content>
        <ng-content select="gio"></ng-content>
    </select>
  `,
  styles: ``
})
export class CardComponent {

}
