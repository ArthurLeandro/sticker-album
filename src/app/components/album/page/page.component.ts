import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  Input,
  AfterViewChecked,
} from "@angular/core";
// import { OwlOptions } from "ngx-owl-carousel-o";
//import Sticker from '../../models/sticker.js';
import { AllStickers, Sticker } from "../../../class/stickers";
import { PageFlip } from "page-flip";
// import { TypeOfSticker } from "../../../interfaces/type-of-sticker.enum";
import { Subject, BehaviorSubject } from "rxjs";
/*https://stackblitz.com/edit/ngx-owl-carousel-o?file=src%2Fapp%2Fapp.component.ts*/

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() pageToView: any;
  pageTitle: Subject<string>;

  constructor(private cdr: ChangeDetectorRef) {
    this.pageTitle = new BehaviorSubject("ERRO AO CARREGAR ESSE DADO ");
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.pageTitle.next(this.pageToView.ID);
    // this.pageFlip = new PageFlip(document.getElementById("book"), {
    //   width: 550,
    //   height: 730,
    //   size: "stretch",
    //   minWidth: 365,
    //   maxWidth: 800,
    //   minHeight: 620,
    //   maxHeight: 1350,
    //   showCover: true,
    // });
    // this.pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
  }

  ngOnInit(): void {}

  public ShouldCreateAnPage(description: string): boolean {
    return description.length > 270 || description.length <= 0;
  }
}
