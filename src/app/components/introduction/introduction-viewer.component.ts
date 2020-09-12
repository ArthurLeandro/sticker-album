import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "app-introduction-component",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.css"],
})
export class IntroductionViewerComponent implements OnInit {
  @Input() title: String = "Teste";
  constructor() {}

  ngOnInit(): void {}
}
