import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective {

  @Input({required: true}) gamoChndes!: boolean;

  constructor(private templateRef: TemplateRef<any>, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, elRef, 'ELEMENT-ATTACHED')
  }
}
