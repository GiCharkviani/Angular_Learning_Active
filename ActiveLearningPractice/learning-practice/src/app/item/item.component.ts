import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean
}
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  hostDirectives: [],
  host: {

  },
  inputs: []
})
export class ItemComponent implements OnInit {
  @Input({required: true}) todo!: todo;

  @Input() set id(id: string) {
    console.log(id, ' - FROM ROUTER PARAMETER');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
