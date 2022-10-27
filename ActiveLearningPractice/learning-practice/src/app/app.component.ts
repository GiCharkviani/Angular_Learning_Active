import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import {tap} from "rxjs";

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title!: string;
  body!: string;

  posts: Post[] = [];

  constructor(private httpService: HttpService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.httpService.data.pipe(tap((posts: Post[]) => {
      const newArray: Post[] = [...posts, ...posts, ...posts, ...posts, ...posts,...posts,
        ...posts, ...posts, ...posts, ...posts,...posts, ...posts, ...posts, ...posts, ...posts].flat();

      console.log(newArray)

      let gotIndex = 0;

     const interval = setInterval(() => {
       // debugger
       if(newArray[gotIndex].userId > 2) {
         this.posts.push(newArray[gotIndex])
         this.cd.markForCheck()
       }

       gotIndex++
       if(gotIndex === newArray.length - 1) {
         clearInterval(interval)
       }
     }, 0)

    })).subscribe(console.log)
  }

  public addPost(): void {
    this.posts.push({
      id: this.posts.length,
      title: this.title,
      body: this.body,
      userId: Number.parseFloat((Math.random() * 3).toFixed(2))
    })
    this.title = '';
    this.body = '';
  }

  public trackByFn(index: number, value: Post): number {
    return value.id
  }
}
