import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[likeCheck]',
})
export class LikeCheckDirective implements OnInit {
  @Input() likedUser: string;

  private currentUserId = JSON.parse(sessionStorage.getItem('current-user'));

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}



  @HostListener('click') onClick(){
    this.clickListening()
  }

  ngOnInit() {
    this.clickListening()
  }

  clickListening(){
    if (this.likedUser) {
      for (let i of this.likedUser) {
        if (i === this.currentUserId.localId) {
          this.renderer.removeChild(
            this.elRef.nativeElement,
            this.elRef.nativeElement.firstChild
          );
            this.renderer.setStyle(
              this.elRef.nativeElement.nextElementSibling,
              'display',
              'inline'
            );
          break;
        }
      }
    }
  }
}
