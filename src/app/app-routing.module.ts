import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./guards/auth.guard";

import { LandingPageComponent } from "./views/landing-page/landing-page.component";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./views/about/about.component";
import { AdminComponent } from "./views/admin/admin.component";
import { ContactComponent } from "./views/contact/contact.component";
import { DeveloperComponent } from "./views/developer/developer.component";
import { IntroductionComponent } from "./views/introduction/introduction.component";
import { LoginComponent } from "./views/users/login/login.component";
import { PaymentComponent } from "./views/payment/payment.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { SignupComponent } from "./views/users/signup/signup.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { ErrorComponent } from "./views/error/error.component";
import { UnauthorizedComponent } from "./views/unauthorized/unauthorized.component";
import { UnauthenticatedComponent } from "./views/unauthenticated/unauthenticated.component";
import { StoreComponent } from "./views/store/store.component";
import { AlbumView } from "./views/album-view/album-view.component";
import { TestComponent } from "./views/test/test.component";

const routes: Routes = [
  { path: "", redirectTo: "/album-view", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "about", component: AboutComponent },
  { path: "album-view", component: AlbumView },
  { path: "store", component: StoreComponent },
  { path: "payment", component: PaymentComponent },
  { path: "error", component: ErrorComponent },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "unauthenticated", component: UnauthenticatedComponent },
  { path: "logout", redirectTo: "introduction" },
  { path: "**", component: NotFoundComponent },
  { path: "admin", component: AdminComponent },
  { path: "contact", component: ContactComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "reports", component: ReportsComponent },
  // { path: "**", component: NotFoundComponent },
  { path: "test", component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
