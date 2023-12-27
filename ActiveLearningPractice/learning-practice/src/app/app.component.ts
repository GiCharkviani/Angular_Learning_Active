import {
  ChangeDetectionStrategy,
  Component, computed, effect, EffectCleanupRegisterFn, EffectRef, inject, Inject, Injector,
  OnInit,
  Signal,
  signal, untracked,
  WritableSignal
} from '@angular/core';
import * as _ from 'lodash'
import {Observable, shareReplay, Subject, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ButtonComponent} from "./button/button.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MyServiceService} from "./my-service.service";
import {CommonModule} from "@angular/common";

export interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
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
    ButtonComponent,
    MatProgressSpinnerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title!: string;
  body!: string;
  showMe: boolean = false;

  mySignal: WritableSignal<number> = signal(3, {equal: _.isEqual});
  secondSignal: WritableSignal<number> = signal(5);

  computerSignal: Signal<number> = computed(() => this.mySignal() + 2);
  effect: EffectRef = effect(() => console.log(`Signal from effect - ${this.computerSignal()} -> ${this.mySignal()}`))

  /* Observable to Signal */
  myObs = new Subject<string>();
  obsToSignal = toSignal(this.myObs, {initialValue: "Giorgi"});

  private readonly myService = inject(MyServiceService);
  public myData$ = this.myService.getData();

  constructor(private readonly injector: Injector) {
  }

  ngOnInit() {
    effect((onCleanup: EffectCleanupRegisterFn) => {
      const mySignal = this.mySignal;
      console.log('Second signal ' + this.secondSignal() + ' * ' + untracked(mySignal));

      // const timer = setInterval(() => {
      //   console.log('My Signal from timeout ' + mySignal())
      // }, 1000)

      // onCleanup(() => clearTimeout(timer))
    }, {injector: this.injector});
  }

  setSignal(value: string): void {
    this.mySignal.set(Number(value))
  }

  updateSignal(value: string): void {
    this.mySignal.update((oldVal) => Number(value) * oldVal);
    this.secondSignal.update((oldVal) => Number(value) / oldVal);
  }

  emitSubject(value: string): void {
    this.myObs.next(value);
    this.myObs.error({msg: 'Error'})
  }

  public todos(): Observable<any[]> {
    return this.myService.getData()
      .pipe(tap(console.log), shareReplay(1));
  }
}
