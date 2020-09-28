import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SideOfSticker } from "../../../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "../../../interfaces/type-of-sticker.enum";
@Component({
  selector: "app-sticker",
  templateUrl: "./sticker.component.html",
  styleUrls: ["./sticker.component.css"],
})
export class StickerComponent implements OnInit, AfterViewInit {
  @Input() urlImage: string;
  @Input() stickerContent: string = "";
  @Input() type: SideOfSticker;
  @Input() hardnessType: boolean;
  controllerAsNumber: number;
  constructor() {}
  ngAfterViewInit(): void {
    this.controllerAsNumber = this.type as number;
  }

  ngOnInit(): void {}
}
