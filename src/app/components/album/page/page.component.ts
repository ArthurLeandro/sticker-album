import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
//import Sticker from '../../models/sticker.js';

/*https://stackblitz.com/edit/ngx-owl-carousel-o?file=src%2Fapp%2Fapp.component.ts*/

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit {
  //TODO refatorar em uma interface contendo os conteudos das paginas
  pages: { [key: string]: string } = {
    cover: "../assets/images/new_capa-min.png",
    backCover: "../assets/images/new_contra-min.png",
    page1: "../assets/images/image_1.png",
    page2: "../assets/images/image_2.png",
    page3: "../assets/images/image_3.png",
    page4: "../assets/images/image_4.png",
  };
  pagesContent: { [key: string]: string } = {
    cover: "",
    page1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    page2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    page3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    page4: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    back: "",
  };
  public controller: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log("Page: ngOnInit");
  }

  // tslint:disable-next-line: member-ordering
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1500,
    margin: 4,
    navText: ["Anterior", "Próximo"],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
    },
    nav: true,
  };
}
