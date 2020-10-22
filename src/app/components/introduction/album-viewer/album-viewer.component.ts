import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-album-viewer",
  templateUrl: "./album-viewer.component.html",
  styleUrls: ["./album-viewer.component.css"],
})
export class AlbumViewerComponent implements OnInit {
  like: boolean = false;
  love: boolean = false;
  cart: boolean = true;

  likeBasic: string = "basic";
  loveBasic: string = "basic";
  cartBasic: string = "basic";

  @Input() title: string = "DEFAULT";
  @Input() urlImage: string = "DEFAULT";


  constructor() {}

  ngOnInit(): void {}

  OnAddShopingList() {
    this.cart = !this.cart;
    if (!this.cart) {
      this.cartBasic = "warn";
    } else {
      this.cartBasic = "basic";
    }
  }
  
  OnLiked() {
    this.like = !this.like;
    if (this.like) {
      this.likeBasic = "warn";
    } else {
      this.likeBasic = "basic";
    }
  }

  OnLoved() {
    this.love = !this.love;
    if (this.love) {
      this.loveBasic = "warn";
    } else {
      this.loveBasic = "basic";
    }
  }

}
