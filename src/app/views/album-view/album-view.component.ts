import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../../services/album-service.service";

@Component({
  selector: "app-album-view",
  templateUrl: "./album-view.component.html",
  styleUrls: ["./album-view.component.css"],
})
export class AlbumView implements OnInit {
  private albumTitle: string;
  private albumAsJSON: any;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumAsJSON = this.albumService.GetJsonFile("");
    let name: string = this.albumAsJSON.name;
    this.albumTitle = name;
  }

  /**
   * Getter $albumTitle
   * @return {string}
   */
  public get $albumTitle(): string {
    return this.albumTitle;
  }

  /**
   * Setter $albumTitle
   * @param {string} value
   */
  public set $albumTitle(value: string) {
    this.albumTitle = value;
  }

  /**
   * Getter $albumAsJSON
   * @return {any}
   */
  public get $albumAsJSON(): any {
    return this.albumAsJSON;
  }

  /**
   * Setter $albumAsJSON
   * @param {any} value
   */
  public set $albumAsJSON(value: any) {
    this.albumAsJSON = value;
  }
}
