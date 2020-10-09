import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  AfterViewChecked,
} from "@angular/core";
import { SideOfSticker } from "../../../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "../../../interfaces/type-of-sticker.enum";
import { ChangeDetectorRef } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Component({
  selector: "app-sticker",
  templateUrl: "./sticker.component.html",
  styleUrls: ["./sticker.component.css"],
})
export class StickerComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  //       < INPUTS >

  @Input() sticker: any;

  //       < VARIABLES >

  // <---- IMAGE VARIABLE ---->
  urlImage: Subject<string>;
  imageOrientation: Subject<string>;
  imageNumber: BehaviorSubject<string>;

  // <---- TEXT VARIABLE ---->
  anchor: Subject<string>;
  textContent: Subject<string>;

  constructor(private cdr: ChangeDetectorRef) {
    this.imageNumber = new BehaviorSubject("ERRO AO ADRESSAR ESTA FIGURINHA");
    this.anchor = new BehaviorSubject("ERRO AO ADRESSAR ESTA FIGURINHA");
    this.imageOrientation = new BehaviorSubject(
      "ERRO AO ADRESSAR ESTA FIGURINHA"
    );
    this.textContent = new BehaviorSubject("ERRO AO ADRESSAR ESTA FIGURINHA");

    this.urlImage = new BehaviorSubject("ERRO AO ADRESSAR ESTA FIGURINHA");
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    //TODO has to be on the on change and only one image is showing
    let image: any = this.sticker.imagem;
    this.urlImage.next(image.urlImage);
    this.imageOrientation.next(image.orientation);
    this.imageNumber.next(image.stickerNumber);
    let text: any = this.sticker.texto;
    this.anchor.next(text.anchor);
    this.textContent.next(text.textContent);
    // console.log(this.sticker);
  }

  ngOnInit(): void {}

  public ShouldShowImageNumber(text:string):boolean{
     return text != "";
  }
}
