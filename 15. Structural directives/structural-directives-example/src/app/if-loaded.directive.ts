import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export type Loaded<T> = {type: 'loaded', data: T};
export type Loading = {type: 'loading'};
export type LoadingState<T> = Loaded<T> | Loading;

export interface Person {
  name: string;
}

@Directive({
  selector: '[ifLoaded]'
})
export class IfLoadedDirective<T> {

  @Input('ifLoaded') set state(state: LoadingState<T>) {
    if(state.type === "loaded") {
      this.vieContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.vieContainerRef.clear();
    }
  }

  // state - is name of input
  static ngTemplateGuard_ifLoaded<T>(dir: IfLoadedDirective<T>, expr: LoadingState<T>): expr is Loaded<T> {return true}

  constructor(private vieContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
