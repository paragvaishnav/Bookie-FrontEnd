import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { UserServiceService } from './service/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading = false;

  constructor(private router: Router, public service: UserServiceService) {
    if (this.service.getRoleFromToken() === 'admin') {
      this.router.navigate(['admin'])
    } else {
      this.router.navigate(['/'])
    }
    this.router.events.subscribe((event: Event) => {
      switch (true) {

        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  public isAdmin() {
    if (this.service.getToken() == null) {
      return false;
    }
    return this.service.getRoleFromToken() == "admin";
  }
}
