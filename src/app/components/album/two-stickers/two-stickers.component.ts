import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { SideOfSticker } from "../../../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "src/app/interfaces/type-of-sticker.enum";

@Component({
  selector: "app-two-stickers",
  templateUrl: "./two-stickers.component.html",
  styleUrls: ["./two-stickers.component.css"],
})
export class TwoStickersComponent implements OnInit, AfterViewInit {
  @Input() urlImage: string;
  @Input() stickerContent: string = "";
  @Input() type: SideOfSticker;
  @Input() hardnessType: boolean;
  @Input() typeOf: TypeOfSticker;

  secondStickerSide: SideOfSticker;

  img1: string;
  img2: string;
  desc1: string;
  desc2: string;

  constructor() {}

  ngAfterViewInit(): void {
    let splittedImg: string[] = this.urlImage.split(";");
    let splittedDesc: string[] = this.stickerContent.split(";");
    this.img1 = splittedImg[0];
    this.img2 = splittedImg[1];
    this.desc1 = splittedDesc[0];
    this.desc2 = splittedDesc[1];
    console.log(
      "IMG1: " +
        this.img1 +
        "\nIMG2: " +
        this.img2 +
        "\nDESC1: " +
        this.desc1 +
        "\nDESC2:" +
        this.desc2
    );

    this.SetSide(this.type);
  }

  ngOnInit(): void {}

  private SetSide(_side: SideOfSticker): void {
    switch (_side) {
      case SideOfSticker.LEFT:
        this.secondStickerSide = SideOfSticker.RIGHT;
        break;
      case SideOfSticker.BELLOW:
        this.secondStickerSide = SideOfSticker.ABOVE;
        break;
      case SideOfSticker.RIGHT:
        this.secondStickerSide = SideOfSticker.LEFT;
        break;
      default:
        this.secondStickerSide = SideOfSticker.BELLOW;
        break;
    }
  }
}
