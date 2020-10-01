import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { SideOfSticker } from "../../../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "../../../interfaces/type-of-sticker.enum";
@Component({
  selector: "app-sticker",
  templateUrl: "./sticker.component.html",
  styleUrls: ["./sticker.component.css"],
})
export class StickerComponent implements OnInit, AfterViewInit {
  //       < INPUTS >

  @Input() urlImage: string;
  @Input() stickerContent: string = "";
  @Input() type: SideOfSticker;
  @Input() hardnessType: boolean;
  @Input() typeOf: TypeOfSticker;

  //       < VARIABLES >
  controllerAsNumber: number;
  constructor() {}

  ngAfterViewInit(): void {
    this.controllerAsNumber = this.type as number;
  }

  ngOnInit(): void {}
}
