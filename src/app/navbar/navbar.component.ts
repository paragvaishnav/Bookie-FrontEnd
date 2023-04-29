import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { LoginPopupComponent } from '../homepage/login-popup/login-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../homepage/sign-up/sign-up.component';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router, public userService: UserServiceService, private _snackBar: MatSnackBar) { }
  cartCount = 5;
  myControl = new FormControl('');
  hidden = false;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  toggleBadgeVisibility() { }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  isLoggedIn() {
    return this.userService.getToken() != null;
  }
  loggedOut() {
    this.openSnackBar("Your Successfully logged Out", "close");
    this.router.navigate(["/"]);
    this.userService.logoutUser();
  }
  open_login() {
    const dialogRef = this.dialog.open(LoginPopupComponent, {
      width: '25vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  open_register() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '35vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchForm = new FormGroup({
    search: new FormControl('', Validators.required)
  })
  search() {
    console.log("here is the value")
    this.router.navigate(['/search'])
    if (this.searchForm.valid) {
      console.log("here is the data", this.searchForm.value);

    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}


