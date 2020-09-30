import { Component, OnInit, AfterViewInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
//import Sticker from '../../models/sticker.js';
import { AllStickers, Sticker } from "../../../class/stickers";
import { PageFlip } from "page-flip";
/*https://stackblitz.com/edit/ngx-owl-carousel-o?file=src%2Fapp%2Fapp.component.ts*/

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit, AfterViewInit {
  allStickers: Sticker[];
  pageFlip: any;
  constructor() {
    this.allStickers = new AllStickers().allStickers;
  }
  ngAfterViewInit(): void {
    this.pageFlip = new PageFlip(document.getElementById("book"), {
      width: 550,
      height: 730,
      size: "stretch",
      minWidth: 365,
      maxWidth: 800,
      minHeight: 620,
      maxHeight: 1350,
      showCover: true,
    });

    this.pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
  }

  ngOnInit(): void {}
}
