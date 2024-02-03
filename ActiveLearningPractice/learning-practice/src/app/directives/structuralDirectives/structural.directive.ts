import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from "@angular/core";


@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective {
  private _showOrNot: boolean = false;

  private context: any = {};

  @Input({required: true})
  set gamoChndes(show: boolean) {
    this._showOrNot = show;
    this.context.$implicit = show;
    this.context.showOrNot = show;

    if(this.gamoChndesAnEs) {
      if (show) {
        this.viewContainerRef.createEmbeddedView(this.gamoChndesAnEs, this.context);
      } else {
        this.viewContainerRef.clear();
      }
    } else {
      if(show) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
      } else {
        this.viewContainerRef.clear();
      }
    }
  }
  get gamoChndes() {
    return this._showOrNot;
  }

  @Input() gamoChndesAnEs!: TemplateRef<any>;

  constructor(private templateRef: TemplateRef<any>, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, elRef, 'ELEMENT-ATTACHED')
  }
}
