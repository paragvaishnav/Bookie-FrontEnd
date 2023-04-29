import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { HomepageModule } from './homepage/homepage.module';
import { ProductModule } from './product/product.module';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccountPageComponent } from './account-page/account-page.component';
import { UserModule } from './user/user.module';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PieChartComponent } from './admin/pie-chart/pie-chart.component';
import { BarChartComponent } from './admin/bar-chart/bar-chart.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { AddCategoryFormComponent } from './admin/add-category-form/add-category-form.component';
import { CustomerTableComponent } from './admin/customer-table/customer-table.component';
import { VendorTableComponent } from './admin/vendor-table/vendor-table.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ViewVendorComponent } from './admin/view-vendor/view-vendor.component';
import { OrderInvoiceComponent } from './admin/order-invoice/order-invoice.component';
import { UserServiceService } from './service/user-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtClientService } from './jwt-client.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccountPageComponent,
    AdminComponent,
    SidebarComponent,
    PieChartComponent,
    DashboardComponent,
    BarChartComponent,
    ProductCategoryComponent,
    AddCategoryFormComponent,
    CustomerTableComponent,
    VendorTableComponent,
    OrdersComponent,
    ViewVendorComponent,
    OrderInvoiceComponent,
  ],
  imports: [
    MatProgressBarModule,
    MatBadgeModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    HomepageModule,
    HttpClientModule,
    ProductModule,
    UserModule
  ],
  providers: [UserServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtClientService,
      multi: true,
    }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
