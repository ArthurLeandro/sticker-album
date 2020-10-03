import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
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
    //TODO has to be on the on change and only one image is showing
    this.controllerAsNumber = this.type as number;
    console.log(
      "IMG: " +
        this.urlImage +
        "\nsticker: " +
        this.stickerContent +
        "\nSied:" +
        this.type
    );
  }

  ngOnInit(): void {}
}
