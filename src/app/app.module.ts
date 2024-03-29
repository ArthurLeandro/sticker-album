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
import { SellCardComponent } from "./components/store/sell-card/sell-card.component";
import { BuyerDialogComponent } from "./components/store/buyer-dialog/buyer-dialog.component";
import { TestComponent } from "./views/test/test.component";
import { TwoStickersComponent } from "./components/album/two-stickers/two-stickers.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AlbumService } from "./services/album-service.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { LoaderComponent } from "./components/loader/loader.component";
import { DevGuard } from "./guards/dev-guard.guard";
import { ComplementaryDataView } from "./views/users/complementary-data/complementary-data.component";
import { FinalizeUserDataComponent } from "./components/dialogs/finalize-user-data/finalize-user-data.component";
import { CreateStickerComponent } from './views/crud/create-sticker/create-sticker.component';
import { DeleteStickerComponent } from './views/crud/delete-sticker/delete-sticker.component';
import { UpdateStickerComponent } from './views/crud/update-sticker/update-sticker.component';
import { CreateAlbumComponent } from './views/crud/album/create-album/create-album.component';
import { DeleteAlbumComponent } from './views/crud/album/delete-album/delete-album.component';
import { UpdateAlbumComponent } from './views/crud/album/update-album/update-album.component';

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
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
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
    AlbumService,
    DevGuard,
  ],
  entryComponents: [BuyerDialogComponent, FinalizeUserDataComponent],
  declarations: [
    AboutComponent,
    AlbumComponent,
    AppComponent,
    BackCoverComponent,
    AdminComponent,
    ContactComponent,
    DeveloperComponent,
    ErrorComponent,
    IntroductionComponent,
    NotFoundComponent,
    PaymentComponent,
    ReportsComponent,
    StoreComponent,
    UnauthenticatedComponent,
    UnauthorizedComponent,
    FrontCoverComponent,
    NavigatorComponent,
    PageComponent,
    SessionPageComponent,
    StickerComponent,
    ConfirmDialogComponent,
    AlbumViewerComponent,
    IntroductionViewerComponent,
    AlbumSliderComponent,
    AlbumSideViewComponent,
    LandingPageComponent,
    AlbumView,
    SellCardComponent,
    BuyerDialogComponent,
    TestComponent,
    TwoStickersComponent,
    FooterComponent,
    LoaderComponent,
    ComplementaryDataView,
    FinalizeUserDataComponent,
    CreateStickerComponent,
    DeleteStickerComponent,
    UpdateStickerComponent,
    CreateAlbumComponent,
    DeleteAlbumComponent,
    UpdateAlbumComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
