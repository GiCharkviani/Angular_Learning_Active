import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

class HideAfterContext {
  public get $implicit() {
    return this.hideAfter
  };
  public hideAfter = 0;
  public counter = 0;
}

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay;
  }
  private _delay = 0;

  @Input('hideAfterThen')
  placeholder: TemplateRef<HideAfterContext> | null = null;

  private context = new HideAfterContext();

  constructor(
      private viewContainerRef: ViewContainerRef,
      private template: TemplateRef<HideAfterContext>) { }

    ngOnInit() {
      this.viewContainerRef.createEmbeddedView(this.template, this.context);

      const intervalId = setInterval(() => {
        this.context.counter--;
      }, 1000)

      setTimeout(() => {
        this.viewContainerRef.clear();
        if(this.placeholder) {
          this.viewContainerRef.createEmbeddedView(this.placeholder, this.context);
        }
        clearInterval(intervalId);
      }, this._delay * 1000)
    }

    // for types to catch
    static ngTemplateContextGuard(dir: HideAfterDirective, ctx: unknown): ctx is HideAfterContext {
      return true;
    }

}
