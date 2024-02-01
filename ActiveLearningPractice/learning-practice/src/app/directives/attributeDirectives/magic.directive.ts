import {Directive, ElementRef, EventEmitter, Input, Output} from "@angular/core";

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

  @Output() changedColor = new EventEmitter();

  constructor(private elRef: ElementRef) {
    console.log(this.elRef, 'EL_REF');
  }

  protected onClick() {
    this._defaultColor = prompt('Clicked') as string;
    this.changedColor.emit(this._defaultColor);
  }
}
