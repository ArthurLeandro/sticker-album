import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthService, AlertService } from "../../../services";
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from "src/app/components/confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({ templateUrl: "login.component.html" })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  resultRecoverPassword: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    public dialog: MatDialog
  ) {
    if (this.authService.userValue) {
      this.router.navigate(["/login"]); //TODO utilizar o auth service aqui tava mandando para o "/" tem que descobrir o pq
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // this.router.navigate([this.returnUrl]);
          this.router.navigate([["../login"], { relativeTo: this.route }]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  recoverPassword(): void {
    this.submitted = true;
    this.alertService.clear();

    let user = this.loginForm.controls["username"].value;

    if (user === undefined || user === "") {
      this.alertService.error("Informe o email para recuperar senha.");
      this.loading = false;
      return;
    }

    const message =
      "Deseja receber um email com informações para alterar sua senha?";
    const dialogData = new ConfirmDialogModel("Resetar Senha ", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.resultRecoverPassword = dialogResult;
    });

    //TODO: REDIRECIONAR PARA TELA DE LOGIN (LIMPAR FORM)
    if (this.resultRecoverPassword) {
      this.alertService.clear();
      //this.authService.recoverPassword(this.resultRecoverPassword);
    }
  }
}
