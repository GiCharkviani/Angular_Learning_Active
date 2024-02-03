import {Directive, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[gamoChndes]'
})
export class StructuralDirective implements OnChanges {

  @Input({required: true}) gamoChndes!: boolean;

  constructor(private templateRef: TemplateRef<any>, private elRef: ElementRef, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef, viewContainerRef, elRef, 'ELEMENT-ATTACHED')
  }

  ngOnChanges(changes: SimpleChanges) {
    if('gamoChndes' in changes) {
      
    }
  }
}
