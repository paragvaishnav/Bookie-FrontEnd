import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService implements HttpInterceptor {

  constructor(private userService: UserServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Acess-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
          'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization",
          'Authorization': 'Bearer '+token,
        },
      });
      // return next.handle(requestWithToken)
    }
    return next.handle(req);
  }
}
