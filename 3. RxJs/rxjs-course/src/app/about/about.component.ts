import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {

  }
}
