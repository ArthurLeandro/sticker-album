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
import { LoaderComponent } from "./components/loader/loader.component";
import { DevGuard } from "./guards/dev-guard.guard";
import { ComplementaryDataView } from "./views/users/complementary-data/complementary-data.component";
import { CreateStickerComponent } from "./views/crud/sticker/create-sticker/create-sticker.component";
import { DeleteStickerComponent } from "./views/crud/sticker/delete-sticker/delete-sticker.component";
import { UpdateStickerComponent } from "./views/crud/sticker/update-sticker/update-sticker.component";
import { CreateAlbumComponent } from "./views/crud/album/create-album/create-album.component";
import { UpdateAlbumComponent } from "./views/crud/album/update-album/update-album.component";
import { DeleteAlbumComponent } from "./views/crud/album/delete-album/delete-album.component";

/*
  Extras stuff

  ! Parametrizes Routes
  WHAT
    São parametros que são enviados pela url, ex.: api/users/:21 .
  WHY
    Algumas rotas precisam de algum tipo de parametro para enviar para o backend e auxiliar no request de dados, é uma forma de auxiliar o get onde você pode passar parâmetros.
  HOW 
    Declarar: users/:id
    Pegar dados dentro da rota:
      Precisa do serviço ActivatedRoute vindo do '@angular/router',
      ele deve ser injetado como uma depêndencia.
      Para pegar algum dado é simples, por exemplo o id previamente:
        return this.activatedRoute.snapshot.paramMap.get("id"); 

  ! Guarda

  WHAT
    É um serviço que é injetado e pode implementar as seguintes interfaces. CanAcivate,CanDeactivate,CanActivateChild,Resolve,CanLoad que são ofertadas pelo 
      '@angular/router' , e retornam algo em forma de boolean, seja uma Promise, uma Observable ou o próprio valor. 
  WHY
    Existem algumas rotas que devem ser protegidas e não podem ser acessadas meramente pela url. Como por exemplo dashboard etc. 
  HOW 
    Desenvolvimento da lógica:
      Cria um serviço e escolhe qual dessas interfaces será atribuída a ele. Na implementação da interface efetua um tipo de análise baseado em um estado ou 
      token que o usuário possui na sessão atual, e assim decide o que fazer com ele. Esse serviço é aplicado 
    Utilização:
      No array de rotas você consgue criar um atributo do mesmo tipo da interface da rota, assim você passa o serviço para esse atributo e já estará 
      funcionando.
  */

const routes: Routes = [
  { path: "", redirectTo: "/album-view", pathMatch: "full" },
  { path: "introduction", component: IntroductionComponent },
  // { path: "introduction", redirectTo: "/album-view", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "about", component: AboutComponent },
  // { path: "album-view", component: AlbumView },
  { path: "album-view", component: AlbumView, canActivate: [AuthGuard] },
  { path: "store", component: StoreComponent },
  { path: "payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "error", component: ErrorComponent },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "unauthenticated", component: UnauthenticatedComponent },
  { path: "logout", redirectTo: "login" },
  { path: "test", component: TestComponent },
  {
    path: "users/complement/:token",
    component: ComplementaryDataView,
  },
  { path: "loading/:first/:second", component: LoaderComponent },
  { path: "admin", component: AdminComponent, canActivate: [DevGuard] },
  { path: "contact", component: ContactComponent },
  { path: "developer", component: DeveloperComponent, canActivate: [DevGuard] },
  { path: "reports", component: ReportsComponent, canActivate: [DevGuard] },
  { path: "test", component: TestComponent },
  { path: "create-album", component: CreateAlbumComponent },
  {
    path: "update-album/:id",
    component: UpdateAlbumComponent,
  },
  {
    path: "delete-album/:id",
    component: DeleteAlbumComponent,
  },
  { path: "create-sticker", component: CreateStickerComponent },
  {
    path: "update-sticker/:id",
    component: UpdateStickerComponent,
  },
  {
    path: "delete-sticker/:id",
    component: DeleteStickerComponent,
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, DevGuard],
})
export class AppRoutingModule {}
