import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { BookShowComponent } from './book-show/book-show.component';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    LoginPopupComponent,
    SignUpComponent,
    MiddleSectionComponent,
    BookShowComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    BookShowComponent,
    LoginPopupComponent,
    SignUpComponent,
    MiddleSectionComponent,
  ]
})
export class HomepageModule { }
