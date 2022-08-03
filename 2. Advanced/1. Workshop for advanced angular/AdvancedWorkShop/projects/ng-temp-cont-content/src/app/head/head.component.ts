import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit, AfterContentInit {

  @ContentChildren(ItemComponent) items: QueryList<ItemComponent>

  @Input() headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    const selectedItem = this.items.find(item => item.selected)
    if(!selectedItem){
      this.items.first.selected = true
    }
  }

  selectItem(item: ItemComponent){
    this.items.forEach(item => item.selected = false);
    item.selected = true;
  }

  get itemsContext(){
    return {
     items: this.items
    }
  }

}
