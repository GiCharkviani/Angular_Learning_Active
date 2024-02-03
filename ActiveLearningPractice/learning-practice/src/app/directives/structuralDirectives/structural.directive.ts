import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective {
  private _showOrNot: boolean = false;

  @Input({required: true})
  set gamoChndes(show: boolean) {
    this._showOrNot = show;
      if(show) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
  }
  get gamoChndes() {
    return this._showOrNot;
  }

  constructor(private templateRef: TemplateRef<any>, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, elRef, 'ELEMENT-ATTACHED')
  }
}
