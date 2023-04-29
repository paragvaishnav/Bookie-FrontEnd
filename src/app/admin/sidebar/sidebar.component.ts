import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public dialog: MatDialog, private router: Router, public service: UserServiceService, private _snackBar: MatSnackBar){}

  loggedOut() {
    this.openSnackBar("Your Successfully logged Out", "close");
    this.router.navigate(["/"]);
    this.service.logoutUser();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
