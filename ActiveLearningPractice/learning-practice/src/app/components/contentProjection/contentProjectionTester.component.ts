import {Component} from "@angular/core";
import {CardComponent} from "./card.component";
import {MatOptionModule} from "@angular/material/core";

@Component({
  selector: 'app-contentProjectionTester',
  standalone: true,
  imports: [
    CardComponent,
    MatOptionModule
  ],
  template: `
    <app-card>
      <option value="Avto">Avto</option>
      <option ngProjectAs="gio" value="Gio">Gio</option>
      <option class="gela" value="Gela">Gela</option>
    </app-card>
  `,
  styles: ``
})
export class ContentProjectionTesterComponent {


}
