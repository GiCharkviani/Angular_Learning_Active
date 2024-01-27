import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,

} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ],
  template: `
    <label for="brogrammers">BroGrammers</label>
    <select #select name="brogrammers" id="brogrammers">
        <ng-content select=".gela"></ng-content>
        <ng-content select="gio"></ng-content>
    </select>
  `,
  styles: ``
})
export class CardComponent implements AfterContentInit {
  @ContentChildren('option', {descendants: true}) optionElements!:QueryList<ElementRef>;


  ngAfterContentInit() {
    console.log(this.optionElements.toArray(), 'OPTION_ELEMENTS')
  }

}
