import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sell-card",
  templateUrl: "./sell-card.component.html",
  styleUrls: ["./sell-card.component.css"],
})
export class SellCardComponent implements OnInit {
  @Input() urlImage: string;
  @Input() description: string = "Lorem Ipsum Dor er";
  @Input() price: number = 0.0;
  constructor() {}

  ngOnInit(): void {}
}
