import {Component} from "@angular/core";
import {CardComponent} from "./card.component";
import {MatOptionModule} from "@angular/material/core";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-contentProjectionTester',
  standalone: true,
  imports: [
    CardComponent,
    MatOptionModule,
    CommonModule
  ],
  template: `
    <app-card>
      <option #option value="Avto">Avto</option>
      <option #option ngProjectAs="gio" value="Gio">Gio</option>
      <option #option class="gela" value="Gela">Gela</option>
    </app-card>
  `,
  styles: ``
})
export class ContentProjectionTesterComponent {


}
