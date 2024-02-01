import {Directive, ElementRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[magiDir]',
  host: {
    '(click)': 'onClick()'
  }
})
export class MagicDirective {
  constructor(private elRef: ElementRef) {
    console.log(this.elRef, 'EL_REF');
  }

  protected onClick() {
    this.elRef.nativeElement.style.color = prompt('Clicked');
  }
}
