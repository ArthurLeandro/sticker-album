import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../services";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  // TODO olhar se vale a pena implementar ele via Assincroniedade
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.userValue;
    if (user) {
      return true;
    }
    console.error("Erro ao fazer o login.");
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
