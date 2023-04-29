import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';



@NgModule({
  declarations: [
    UserOrdersComponent,
    CartComponent,
    ConfirmPopupComponent
  ],
  imports: [
    MatSelectModule,
    CommonModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class UserModule { }
