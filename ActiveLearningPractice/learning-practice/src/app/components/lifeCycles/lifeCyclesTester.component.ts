import {
  Component,
  DestroyRef,
  DoCheck,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-localComponent',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Age: {{age}}</p>
    </div>
  `,
  styles: ``
})
export class localComponent implements OnChanges, OnInit, OnDestroy, DoCheck {
  @Input('firstName') name!: string;
  @Input() age: number = 0;
  private destroyRef = inject(DestroyRef);

  constructor() {
    console.log('CONSTRUCTOR_CHILD');

    this.destroyRef.onDestroy(() => {
      console.log('ON_DESTROY_REF_CHILD')
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'ON_CHANGES_CHILD')
  }

  ngOnInit() {
    console.log('ON_INIT_CHILD')
  }

  ngDoCheck() {
    console.log('DO_CHECK')
  }

  ngOnDestroy() {
    console.log('ON_DESTROY_CHILD')
  }

}


@Component({
  selector: 'app-lifeCycles',
  standalone: true,
  imports: [
    FormsModule,
    localComponent
  ],
  template: `
    <input type="text" [(ngModel)]="name" />
    <app-localComponent [age]="23" [firstName]="name" ></app-localComponent>
  `,
  styles: ``
})
export class LifeCyclesTesterComponent implements OnInit, OnDestroy, DoCheck {
  public name!: string;
  private destroyRef = inject(DestroyRef);

  constructor() {
    console.log('CONSTRUCTOR');

    this.destroyRef.onDestroy(() => {
      console.log('ON_DESTROY_REF')
    })
  }

  ngOnInit() {
    console.log('ON_INIT')
  }

  ngDoCheck() {
    console.log('DO_CHECK')
  }

  ngOnDestroy() {
    console.log('ON_DESTROY')
  }

}


