import { Component, OnInit } from "@angular/core";
import { PageFlip } from "page-flip";
import { Sticker } from "../../class/stickers";
import { SideOfSticker } from "../../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "../../interfaces/type-of-sticker.enum";

// declare var PageFlip: any;

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  pageFlip: any;
  stick: Sticker;

  constructor() {
    this.stick = new Sticker(
      "../../../assets/images/image_5_960x604.png;../../assets/images/image_6.png",
      "Criaram também o calendário de 365 dias. Construíram grandes monumentos e grandes cidades.;Os egípcios inventaram o relógio de sol e a balança.",
      7,
      SideOfSticker.LEFT,
      TypeOfSticker.capa,
      false
    );
  }

  ngOnInit(): void {
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
  }
}
