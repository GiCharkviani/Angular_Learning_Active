import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyDir]',
  standalone: true
})
export class MyDirDirective {

  constructor() { }

}
