import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AlbumService } from "../../services/album-service.service";
import { PageFlip } from "page-flip";

@Component({
  selector: "app-album-view",
  templateUrl: "./album-view.component.html",
  styleUrls: ["./album-view.component.css"],
})
export class AlbumView implements OnInit, AfterViewInit {
  private albumTitle: string;
  private albumPages: any;
  private albumAsJSON: any;
  private pageFlip: any;
  
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumAsJSON = this.albumService.GetJsonFile("");
    this.albumTitle = name;
    this.albumPages = this.albumAsJSON.pages;
  }

  ngAfterViewInit(): void {
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
