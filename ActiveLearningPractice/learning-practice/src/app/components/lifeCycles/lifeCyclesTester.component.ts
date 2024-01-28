import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
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
export class localComponent implements OnChanges {
  @Input() name!: string;
  @Input() age: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'ON_CHANGES')
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
    <app-localComponent [age]="23" [name]="name" ></app-localComponent>
  `,
  styles: ``
})
export class LifeCyclesTesterComponent implements OnInit {
  public name!: string;

  ngOnInit() {
    console.log('ON_INIT')
  }

}


