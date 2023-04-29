import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { MiddleSectionComponent } from './homepage/middle-section/middle-section.component';
import { ProductsPageComponent } from './product/products-page/products-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { CartComponent } from './user/cart/cart.component';
import { OrderProcessComponent } from './product/order-process/order-process.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { CustomerTableComponent } from './admin/customer-table/customer-table.component';
import { VendorTableComponent } from './admin/vendor-table/vendor-table.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ViewVendorComponent } from './admin/view-vendor/view-vendor.component';
import { OrderInvoiceComponent } from './admin/order-invoice/order-invoice.component';
import { HasRoleGuard } from './has-role.guard';
import { RoleGuardGuard } from './core/guards/role-guard.guard';

const routes: Routes = [
  {
    path: "", component: MiddleSectionComponent
  },
  {
    path: "product-view", component: ProductViewComponent,
  },
  {
    path: "search", component: ProductsPageComponent,
  },
  {
    path: "account-page", component: AccountPageComponent,
  },
  {
    path: "myorders", component: UserOrdersComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "order-details", component: OrderProcessComponent
  },
  {
    path: "admin", component: AdminComponent, canActivate:[RoleGuardGuard],
    children:
      [
        {
          path: '',  redirectTo: 'dashboard', pathMatch: 'full'
        },
        {
          path: "dashboard", component: DashboardComponent
        },
        {
          path: "category", component: ProductCategoryComponent
        },
        {
          path: "view-customer", component: CustomerTableComponent
        },
        {
          path: "view-vendors", component: VendorTableComponent,
        },
        {
          path: "view-orders", component: OrdersComponent
        },
        {
          path: "vendor", component: ViewVendorComponent
        },
        {
          path:"order-details",component:OrderInvoiceComponent
        }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
