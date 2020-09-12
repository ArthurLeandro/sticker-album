import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { ContactComponent } from './views/contact/contact.component';
import { DeveloperComponent } from './views/developer/developer.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { LoginComponent } from './views/users/login/login.component';
import { PaymentComponent } from './views/payment/payment.component';
import { ReportsComponent } from './views/reports/reports.component';
import { SignupComponent } from './views/users/signup/signup.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ErrorComponent } from './views/error/error.component';
import { UnauthorizedComponent } from './views/unauthorized/unauthorized.component';
import { UnauthenticatedComponent } from './views/unauthenticated/unauthenticated.component';
import { StoreComponent } from './views/store/store.component';
const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'unauthenticated', component: UnauthenticatedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'store', component: StoreComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', component: NotFoundComponent }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
