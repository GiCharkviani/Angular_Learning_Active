import {Directive, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, 'ELEMENT-ATTACHED')
  }
}
