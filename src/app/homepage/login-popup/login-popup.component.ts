import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  hide = true
  signup = new NavbarComponent(this.dialog, this.router, this.service, this._snackBar);

  openLoginPopup() {
    this.dialog.closeAll();
    return this.signup.open_register();
  }
  constructor(public dialog: MatDialog, private router: Router, public service: UserServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  formLogIn = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  loginUserForm() {
    this.dialog.closeAll();
    this.service.loginUser(this.formLogIn.value).subscribe
      (
        (res) => {
          localStorage.setItem("token",JSON.stringify(res.jwt))
          if (this.service.getRoleFromToken() == 'admin') {
            this.router.navigate(['/admin']);
          }
          this.openSnackBar("Your successfully logged In", "close");
        },
        (err) => {
          console.log("here is the status", err.status);
          if (err.status == 401) {
            this.openSnackBar("Invalid username or password", "close");
          }
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
