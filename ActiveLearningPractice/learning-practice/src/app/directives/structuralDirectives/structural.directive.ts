import {Directive, ElementRef, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective {

  constructor(private templateRef: TemplateRef<any>, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, elRef, 'ELEMENT-ATTACHED')
  }
}
