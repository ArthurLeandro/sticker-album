import { Component, OnInit, AfterViewInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
//import Sticker from '../../models/sticker.js';
import { AllStickers, Sticker } from "../../../class/stickers";
import { PageFlip } from "page-flip";
import { TypeOfSticker } from "../../../interfaces/type-of-sticker.enum";
/*https://stackblitz.com/edit/ngx-owl-carousel-o?file=src%2Fapp%2Fapp.component.ts*/

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit, AfterViewInit {
  private allStickers: Sticker[];
  private record: number;
  pageFlip: PageFlip;

  constructor() {
    this.allStickers = new AllStickers().allStickers;
    this.record = 1;
  }
  public getNextValue(i: number): number {
    let value = i;
    if (this.record == 0) this.record = i;
    else value = this.record;
    return value;
  }
  public getIndexForSecondSticker(): number {
    let value: number = this.record + 1;
    this.record += 2;
    return value;
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
    let parent = document.getElementById("Two 3").parentElement;
    let parentOfSecond = document.getElementById("Two 4").parentElement;
    parentOfSecond.classList.remove("my-page");
    parent.appendChild(document.getElementById("Two 4"));
    // console.log(document.getElementById("Two 4"));
  }

  ngOnInit(): void {}

  public ShouldCreateAnPage(description: string): boolean {
    return description.length > 270 || description.length <= 0;
  }

  public getFirstSticker(i: number): Sticker {
    let value = i + this.record < this.allStickers.length ? i + this.record : 1;
    return this.allStickers[value];
  }
  public getNormalSticker(i: number): Sticker {
    return this.allStickers[i];
  }
  public getSecondSticker(i: number): Sticker {
    this.record = 1;
    return this.getFirstSticker(i);
  }
  /**
   * Setter $allStickers
   * @param {Sticker[]} value
   */
  public set $allStickers(value: Sticker[]) {
    this.allStickers = value;
  }
}
