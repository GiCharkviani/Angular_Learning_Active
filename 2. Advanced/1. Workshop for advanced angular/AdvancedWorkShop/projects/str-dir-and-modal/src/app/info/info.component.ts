import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() cvladebistvis:any;

  @Input() body!:TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
