import {
  AfterContentInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-input-lib',
  templateUrl: './input-lib.component.html',
  styleUrls: ['./input-lib.component.scss'],
})
export class InputLibComponent implements AfterContentInit {
  @Input() icon: string;

  @ContentChild(InputRefDirective, { static: false }) input: InputRefDirective;

  constructor() {}

  ngAfterContentInit() {
    if (!this.input) {
      console.log('the app-input-lib needs an input insde its content');
    }
  }

  @HostBinding('class.input-focus') get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const classList = {};
    if (this.icon) {
      classList[this.icon] = true;
    }
    return classList;
  }
}
