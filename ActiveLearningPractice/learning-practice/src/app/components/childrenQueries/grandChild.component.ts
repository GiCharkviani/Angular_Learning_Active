import {Component, InjectionToken, Input} from "@angular/core";

export const ADVANCED_DI_COMPONENT = new InjectionToken<string>('adi');

@Component({
  selector: 'app-grandChildQuery',
  standalone: true,
  providers: [{ provide: ADVANCED_DI_COMPONENT, useExisting: GrandChildComponent }],
  imports: [],
  template: `
    <p>Grand Child name: {{name}}</p>
    <p>Grand Child age: {{age}}</p>
  `,
  styles: ``
})
export class GrandChildComponent {
  @Input() name!: string;
  @Input() age!: number;

}
