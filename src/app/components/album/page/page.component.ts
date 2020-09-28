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
      width: 450,
      height: 600,
      size: "stretch",
      showCover: true,
      minWidth: 450,
      maxWidth: 450,
      minHeight: 600,
      maxHeight: 600,
    });
    this.pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
  }

  ngOnInit(): void {}
}
