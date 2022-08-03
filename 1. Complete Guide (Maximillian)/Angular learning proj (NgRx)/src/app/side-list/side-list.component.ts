import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SideItemModel } from './sideItem.model';
import * as fromAppReducer from '../app.reducer'
import * as SideListActions from './store/side-list.actions'

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit {

  sideList: Observable<{sideList: SideItemModel[]}>

  constructor(private store: Store<fromAppReducer.AppState>) { }

  onSubmit(form: NgForm){
    const newItem = new SideItemModel(form.value.img, form.value.text)
    this.store.dispatch(new SideListActions.AddItem(newItem))
  }
  ngOnInit(): void {
    this.store.dispatch(new SideListActions.FetchItems())
    this.sideList = this.store.select('sideList')
  }

  onStore(){
    return this.store.dispatch(new SideListActions.StoreItems())
  }

}
