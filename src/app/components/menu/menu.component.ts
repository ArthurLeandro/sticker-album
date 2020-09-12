import { Component, OnInit } from '@angular/core';
import {MatMenuModule, MatMenu} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggleNavbar: boolean;

  constructor() {
    this.toggleNavbar = true;
   }

  ngOnInit(): void {
  }

}
