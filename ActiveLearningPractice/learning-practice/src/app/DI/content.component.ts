import {Component} from "@angular/core";


@Component({
  selector: 'app-contentComponent',
  standalone: true,
  imports: [],
  template: `
        <p>I am Content Component</p>
  `,
  styles: ``,
  providers: [

  ]
})
export class ContentComponent {
  // constructor(@Inject(FLOWER) public flower: {emojy: string}) {
  //  // will error as it's provided in diChild component's viewProvider's array
  // }
}
