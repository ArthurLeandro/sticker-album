import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ComplementaryClientData } from "../../../class/complementary-client-data";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-complementary-data",
  templateUrl: "./complementary-data.component.html",
  styleUrls: ["./complementary-data.component.css"],
})
export class ComplementaryDataView implements OnInit {
  private token: string;

  public dataComplementaryForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.GenerateFormOnClientData(new ComplementaryClientData());
  }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get("token");
    // console.log(this.dataComplementaryForm.controls["cellphone"]);
  }

  public GenerateFormOnClientData(data: ComplementaryClientData) {
    this.dataComplementaryForm = this.formBuilder.group({
      cellphone: [data.$cellphone],
      adress: [data.$adress],
      birthDate: [data.$birthDate],
      schoolarship: [data.$schoolarship],
      institution: [data.$institution],
    });
  }

  public OnSubmit(): void {
    console.log(this.dataComplementaryForm.value);
    //TODO SEND TO DB
    this.dataComplementaryForm.reset();
    this.router.navigate(["album-view"]);
  }
}
