import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[currentUser]'
})
export class CurrentUserDirective implements OnInit{
  @Input() currentUserMessageId:number;


  constructor(private renderer: Renderer2, private elRef: ElementRef){}

  private currentUserId = JSON.parse(sessionStorage.getItem('current-user'))



  ngOnInit(){
    if(this.currentUserId.localId == this.currentUserMessageId){
      this.renderer.removeClass(this.elRef.nativeElement, 'you')
      this.renderer.addClass(this.elRef.nativeElement,'me')
    }
  }
}
