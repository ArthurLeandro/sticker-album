import { Component, OnInit, Input } from "@angular/core";
import { IntroPageContent } from "../../../class/albums";

@Component({
  selector: "app-album-slider",
  templateUrl: "./album-slider.component.html",
  styleUrls: ["./album-slider.component.css"],
})
export class AlbumSliderComponent implements OnInit {
  @Input() contentToDisplay: IntroPageContent;
  constructor() {}

  ngOnInit(): void {}
}
