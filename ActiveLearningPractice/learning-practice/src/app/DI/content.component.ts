import {Component} from "@angular/core";
import {LightWeightToken} from "./diChild.component";


@Component({
  selector: 'app-contentComponent',
  standalone: true,
  imports: [],
  template: `
        <p>I am Content Component</p>
  `,
  styles: ``,
  providers: [
    {provide: LightWeightToken, useExisting: ContentComponent}
  ]
})
export class ContentComponent extends LightWeightToken {
  // constructor(@Inject(FLOWER) public flower: {emojy: string}) {
  //  // will error as it's provided in diChild component's viewProvider's array
  // }

  public flyBaby() {
    console.log('Do Something')
  }
}
