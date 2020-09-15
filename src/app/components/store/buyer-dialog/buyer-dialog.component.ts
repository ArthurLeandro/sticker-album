import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buyer-dialog',
  templateUrl: './buyer-dialog.component.html',
  styleUrls: ['./buyer-dialog.component.css']
})
export class BuyerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BuyerDialogComponent>) { }

  ngOnInit(): void {
  }
  OnClose(){
    this.dialogRef.close();
  }

}
