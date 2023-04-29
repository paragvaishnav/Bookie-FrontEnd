import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  
  constructor(private service : UserServiceService,public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAutorized(route);
  }
  private isAutorized(route: ActivatedRouteSnapshot): boolean {
    if(this.service.getToken()!=null){
      if(this.service.getRoleFromToken()==='admin'){
        return true;
      }
    }
    this.router.navigate(['/'])
    return false;
  }
}
