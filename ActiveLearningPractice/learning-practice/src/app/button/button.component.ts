import {booleanAttribute, Component, Input, numberAttribute, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent {
  @Input({required: true, transform: booleanAttribute}) show: boolean = true;
  @Input({required: true, transform: setTitle}) title: string = 'Click me';
  @Input({transform: numberAttribute, alias: 'fontSize'}) size: number = 1.5;

}

function setTitle(title: string): string {
  let main = 'Click me ';
  if (title) {
    main +=  `- ${title}`
  }
  return  main;
}
