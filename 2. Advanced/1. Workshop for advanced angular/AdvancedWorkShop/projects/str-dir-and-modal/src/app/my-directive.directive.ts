import { AfterContentInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  // stopPropagination() მეთოდი გამოიყენება მაგალითად მაშინ
  // თუ მშობელზე განთავსებულია ქლიქ ივენთი და ასევე შვილობილზეც
  // ამ შემთხვევაში როცა მშობელს დაეჭირება, შვილისაც გამოიძეხება.
  // ამისგან თავის ასარიდებლად...

  @Input() set appMyDirective(show:boolean) {
    if(show){
      this.viewContainer.clear()
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear()
    }
  }

}
