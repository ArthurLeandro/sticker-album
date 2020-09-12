import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-album-side-view",
  templateUrl: "./album-side-view.component.html",
  styleUrls: ["./album-side-view.component.css"],
})
export class AlbumSideViewComponent implements OnInit {
  @Input() title: string = "DEFAULT";
  @Input() sideName: string = "";
  constructor() {}

  ngOnInit(): void {}
}
