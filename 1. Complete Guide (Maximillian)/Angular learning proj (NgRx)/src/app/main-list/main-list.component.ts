import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from './item.model'
import * as MainListActions from './store/main-list.actions'
import * as fromAppReducer from '../app.reducer'

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})


export class MainListComponent implements OnInit {

  mainList: Observable<{mainList: ItemModel[]}>
  edit: boolean = false;

  constructor(private store: Store<fromAppReducer.AppState>) { }


  addItem(form: NgForm){
    const newItem = new ItemModel(form.value.name, form.value.skill)
    this.store.dispatch(new MainListActions.AddItem(newItem))
    form.reset()
  }

  onDelete(index:number){
    this.store.dispatch(new MainListActions.DeleteItem(index))
  }

  onEdit(){
    this.edit = !this.edit
  }

  onSave(form:NgForm, index: number){
    let edited = new ItemModel(form.value.name, form.value.skill);
    this.store.dispatch(new MainListActions.EditItem({index: index, newItem: edited}))
    this.edit = false;
  }

  storeItems(){
    this.store.dispatch(new MainListActions.StoreItems())
  }

  ngOnInit() {
    this.store.dispatch(new MainListActions.FetchItems())
    this.mainList = this.store.select('mainList')
  }


}
