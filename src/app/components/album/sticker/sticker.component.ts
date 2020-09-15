import { Component, OnInit, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
@Component({
  selector: "app-sticker",
  templateUrl: "./sticker.component.html",
  styleUrls: ["./sticker.component.css"],
})
export class StickerComponent implements OnInit {
  @Input() urlImage: string;
  @Input() stickerContent: string = "";
  @Input() leftSide: boolean;
  @Input() rightSide: boolean;
  @Input() upSide: boolean;
  @Input() downSide: boolean;
  constructor() {}

  ngOnInit(): void {}
}
