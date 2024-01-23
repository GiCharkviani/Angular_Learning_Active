import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit,} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'testComponent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Items: </h2>
    <ul>
      <li>Name: {{item.name}}</li>
      <li>Quantity: {{item.quantity}}</li>
    </ul>
  `,
  styles: ``,
  standalone: true
})
export class testComponent implements OnInit, OnDestroy {
  @Input() item: any;

  ngOnInit() {
    console.log(this.item.name + ' INITIALIZED')
  }

  ngOnDestroy() {
    console.log(this.item.name + ' DESTROYED')
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    testComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  public isDisabled = true;
  public myAttribute = 'Avto';

  public render: boolean = false;

  public ingredientList = [
    {name: 'noodles', quantity: 1, id: 21},
    {name: 'miso broth', quantity: 1,  id: 24},
    {name: 'egg', quantity: 2,  id: 51},
  ];

  public addItem() {
    this.ingredientList.push({
      name: 'Khachapuri',
      quantity: 32,
      id: 54
    })
  }

  public removeItem() {
    this.ingredientList.pop()
  }

  getValue(name: string) {
    console.log(name + ' - ITEM_CREATED')
    return ''
  }

}

