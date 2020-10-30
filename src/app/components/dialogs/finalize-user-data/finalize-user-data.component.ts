import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-finalize-user-data",
  templateUrl: "./finalize-user-data.component.html",
  styleUrls: ["./finalize-user-data.component.css"],
})
export class FinalizeUserDataComponent implements OnInit {
  message: string;
  @Input() link: string;
  constructor(
    public dialogRef: MatDialogRef<FinalizeUserDataComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log(data.ink);
    this.link = "users/complement/" + data.link;
    this.message =
      "Agora para finalizar o seu cadastro em nossa plataforma siga os passos do enviado no email cadastrado.\nCaso esteja tendo alguns problemas para acessar o email, siga o link: ";
  }

  ngOnInit(): void {}

  OnClose() {
    this.dialogRef.close();
  }
}
