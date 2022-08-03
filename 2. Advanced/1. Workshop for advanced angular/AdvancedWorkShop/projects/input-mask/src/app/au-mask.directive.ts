import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SPECIAL_CHARACTERS } from './mask.utils';


@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask') mask = '';

  input: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.input = elRef.nativeElement
  }

  ngOnInit(){
    this.input.value = this.buildPlaceholder()

  }

  buildPlaceholder(){

    const chars = this.mask.split('');

    // const value = chars.reduce((result, char)=> {
    //   return result += result.includes(SPECIAL_CHARACTERS)
    // }, '')

    const value =''

    return value
  }

}
