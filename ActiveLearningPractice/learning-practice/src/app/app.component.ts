import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Person} from "./decoratos/demo";



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
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {

  constructor() {
    // Person.callMe();
    const avto = new Person('Avto')
    // const giorgi = new Person('Giorgi')

    console.log('AFTER_CLASS_CREATION')

    // console.log(avto, giorgi)
  }

}
