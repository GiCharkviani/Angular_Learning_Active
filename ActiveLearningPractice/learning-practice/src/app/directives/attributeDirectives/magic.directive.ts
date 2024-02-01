import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[magiDir]',
  host: {
    '(click)': 'onClick()',
    '[style.color]': '_defaultColor'
  }
})
export class MagicDirective {
  public _defaultColor: string = 'black';

  @Input() set defaultColor(color: string) {
    this._defaultColor = color;
  }

  constructor(private elRef: ElementRef) {
    console.log(this.elRef, 'EL_REF');
  }

  protected onClick() {
    this._defaultColor = prompt('Clicked') as string;
  }
}
