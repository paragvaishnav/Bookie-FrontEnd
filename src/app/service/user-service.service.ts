import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getToken() {
    return JSON.parse(localStorage.getItem("token")!);
  }

  API: string = "http://localhost:8080/api/user/";

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
    return this.http.post<any>(this.API + "save", data);
  }

  loginUser(data: any) {
    return this.http.post<any>(this.API + "authenticate", data)
  }

  logoutUser() {
    localStorage.removeItem("token");
  }

  getRoleFromToken() {
    if (this.getToken() != null) {
      let token = JSON.stringify(this.getToken());
      let jwtData = token.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      return decodedJwtData.scopes;
    } else {
      return "";
    }
  }
}
