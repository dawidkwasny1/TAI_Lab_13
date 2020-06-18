
import {Injectable, Injector} from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   constructor(private authService: AuthService) {}

   intercept(request: HttpRequest<any>, next: HttpHandler) {

      const basicAuthHeaderString = this.authService.getAuthenticatedToken();
      const username = this.authService.getAuthenticatedUser();

      if(basicAuthHeaderString && username) {
         request = request.clone({
            setHeaders: {
               Authorization: basicAuthHeaderString
            }
         });
      }
      return next.handle(request);
   }
}
