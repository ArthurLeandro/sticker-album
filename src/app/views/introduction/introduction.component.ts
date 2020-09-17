import { Component, OnInit } from "@angular/core";
import { IntroPageContent } from "../../class/albums";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.css"],
})
export class IntroductionComponent implements OnInit {
  albumSliderOne: IntroPageContent;
  albumSliderTwo: IntroPageContent;
  albumSliderThree: IntroPageContent;

  albumSideViewOne: IntroPageContent;
  albumSideViewTwo: IntroPageContent;

  constructor() {
    this.albumSliderOne = new IntroPageContent("Mais recentes");
    this.albumSliderTwo = new IntroPageContent("Meus Favoritos");
    this.albumSliderThree = new IntroPageContent("Meus álbuns");

    this.albumSideViewOne = new IntroPageContent("Álbuns Recomendados");
    this.albumSideViewTwo = new IntroPageContent("Figurinhas Recomendadas");
    
  }

  ngOnInit(): void {}
}
