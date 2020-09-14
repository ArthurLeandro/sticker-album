import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "../app/modules/shared/shared.module";

import { AboutComponent } from "./views/about/about.component";

import { AppComponent } from "./app.component";
import { AuthGuard } from "./guards/auth.guard";

import { JwtInterceptor, ErrorInterceptor } from "./helpers";
import { fakeBackendProvider } from "./helpers";

import { UsersModule } from "./views/users/users.module";

import { AdminComponent } from "./views/admin/admin.component";
import { ContactComponent } from "./views/contact/contact.component";
import { DeveloperComponent } from "./views/developer/developer.component";
import { ErrorComponent } from "./views/error/error.component";
import { IntroductionComponent } from "./views/introduction/introduction.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { PaymentComponent } from "./views/payment/payment.component";
import { ReportsComponent } from "./views/reports/reports.component";
import { StoreComponent } from "./views/store/store.component";
import { UnauthenticatedComponent } from "./views/unauthenticated/unauthenticated.component";
import { UnauthorizedComponent } from "./views/unauthorized/unauthorized.component";

import { NotificationBarComponent } from "./components/notification-bar/notification-bar.component";

import { AlbumComponent } from "./components/album/album.component";
import { BackCoverComponent } from "./components/album/back-cover/back-cover.component";
import { FrontCoverComponent } from "./components/album/front-cover/front-cover.component";
import { NavigatorComponent } from "./components/album/navigator/navigator.component";
import { PageComponent } from "./components/album/page/page.component";
import { SessionPageComponent } from "./components/album/session-page/session-page.component";
import { StickerComponent } from "./components/album/sticker/sticker.component";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatPseudoCheckboxModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { IntroductionViewerComponent } from "./components/introduction/introduction-viewer.component";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { AlbumViewerComponent } from "./components/introduction/album-viewer/album-viewer.component";
import { AlbumSliderComponent } from "./components/introduction/album-slider/album-slider.component";
import { AlbumSideViewComponent } from "./components/introduction/album-side-view/album-side-view.component";
import { LandingPageComponent } from "./views/landing-page/landing-page.component";
import { AlbumView } from "./views/album-view/album-view.component";
import { SellCardComponent } from './components/store/sell-card/sell-card.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FormsModule,
    MatToolbarModule,
    MatPseudoCheckboxModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    //MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    SharedModule,
    NoopAnimationsModule,
    UsersModule,
  ],
  providers: [
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  declarations: [
    AboutComponent,
    AdminComponent,
    AlbumComponent,
    AppComponent,
    BackCoverComponent,
    ContactComponent,
    DeveloperComponent,
    ErrorComponent,
    FrontCoverComponent,
    IntroductionComponent,
    NavigatorComponent,
    NotFoundComponent,
    PageComponent,
    PaymentComponent,
    ReportsComponent,
    SessionPageComponent,
    StickerComponent,
    StoreComponent,
    UnauthenticatedComponent,
    UnauthorizedComponent,
    ConfirmDialogComponent,
    AlbumViewerComponent,
    IntroductionViewerComponent,
    AlbumSliderComponent,
    AlbumSideViewComponent,
    LandingPageComponent,
    AlbumView,
    SellCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
