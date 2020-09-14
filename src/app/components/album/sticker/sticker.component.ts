import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sticker",
  templateUrl: "./sticker.component.html",
  styleUrls: ["./sticker.component.css"],
})
export class StickerComponent implements OnInit {
  @Input() urlImage: string ;
  @Input() stickerContent: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
}
