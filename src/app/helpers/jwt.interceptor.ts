import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { AuthService } from "../services";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let idToken = localStorage.getItem(environment.JWT_TOKEN_ID || "idToken");
    if (idToken) {
      let clonnedRequest: HttpRequest<any> = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken),
      });
      return next.handle(clonnedRequest);
    } else {
      return next.handle(request);
    }
    //COMO ESTAVA ANTES
    // add auth header with jwt if user is logged in and request is to the api url
    // const user = this.authService.userValue;
    // const isLoggedIn = user && user.token;
    // const isApiUrl: boolean = request.url.startsWith(environment.apiUrl);
    // if (isLoggedIn && isApiUrl) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${user.token}`,
    //return next.handle(request);
    //     },
    //   });
    // }
  }
}
