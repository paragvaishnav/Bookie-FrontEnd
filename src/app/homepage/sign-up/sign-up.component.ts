import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  login = new NavbarComponent(this.dialog, this.router,this.service,this._snackBar);

  openLoginPopup() {
    this.dialog.closeAll();
    return this.login.open_login();
  }

  
  constructor(public service: UserServiceService, public dialog: MatDialog, private router: Router, private _snackBar: MatSnackBar) { }
  ngOnInit(): void { }
  formSignup = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  )

  sinupUserForm() {
    if (this.formSignup.valid) {
      this.service.saveUser(this.formSignup.value).subscribe(
        message => {
          this.dialog.closeAll();
          if (message.statusCode == 201) {
            this.openSnackBar(message.message, "Close");
          }
        },
        err => {
          console.log(err);
          this.dialog.closeAll();
          this.openSnackBar("Account Already Exists", "Close");
        }
      )
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration:2000
    });
  }
}
