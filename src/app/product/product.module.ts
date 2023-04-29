import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule, NgModel } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrderProcessComponent } from './order-process/order-process.component';
@NgModule({
  declarations: [
    ProductViewComponent,
    ProductsPageComponent,
    OrderProcessComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatStepperModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ProductModule { }
