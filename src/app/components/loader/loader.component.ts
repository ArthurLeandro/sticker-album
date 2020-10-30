import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent implements OnInit {
  public first: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.first =
      this.activatedRoute.snapshot.paramMap.get("first") +
      " " +
      this.activatedRoute.snapshot.paramMap.get("second");
  }
}
