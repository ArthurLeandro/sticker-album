import { Component, OnInit } from "@angular/core";
import { PageFlip } from "page-flip";

// declare var PageFlip: any;

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  pageFlip: any;
  constructor() {}

  ngOnInit(): void {
    this.pageFlip = new PageFlip(document.getElementById("book"), {
      width: 300,
      height: 450,
      size: "fixed",
      showCover: true,
    });
    this.pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
  }
}
