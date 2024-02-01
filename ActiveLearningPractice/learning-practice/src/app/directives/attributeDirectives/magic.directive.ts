import {Directive, ElementRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[magiDir]',
})
export class MagicDirective {
  constructor(private elRef: ElementRef) {
    console.log(this.elRef, 'EL_REF');
  }
}
