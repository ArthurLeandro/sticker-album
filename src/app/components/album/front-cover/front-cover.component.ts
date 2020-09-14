import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-front-cover',
  templateUrl: './front-cover.component.html',
  styleUrls: ['./front-cover.component.css']
})
export class FrontCoverComponent implements OnInit {

  @Input() urlImage:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
