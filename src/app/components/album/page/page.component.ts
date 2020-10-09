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
// import { TypeOfSticker } from '../../../interfaces/type-of-sticker.enum';
import { Subject, BehaviorSubject } from "rxjs";
/*https://stackblitz.com/edit/ngx-owl-carousel-o?file=src%2Fapp%2Fapp.component.ts*/

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() pageToView: any;
  pageTitle: BehaviorSubject<string>;
  type:BehaviorSubject<string>;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.pageTitle = new BehaviorSubject("ERRO AO CARREGAR ESSE DADO ");
    this.type = new BehaviorSubject("ERRO AO CARREGAR ESSE DADO ");
  }
  ngAfterViewChecked(): void {
    // this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.pageTitle.next(this.pageToView.ID);
    this.type.next(this.pageToView.stickers[0].typeOfSticker);

    //this.pageToView.stickers[0].typeOfStickers
  }

  ngOnInit(): void {}

  public ShouldCreateAnPage(description: string): boolean {
    return description.length > 270 || description.length <= 0;
  }

  public ShouldApplyCover(val:string):boolean{
    return val == "capa";
  }
}
