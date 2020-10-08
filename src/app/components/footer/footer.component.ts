import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  adress: string = "Valor do endereço";
  aboutUs: string = "Somos uma empresa ";

  constructor() {}

  ngOnInit(): void {}
}
