import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { CartSummaryComponent } from "./cart/cart-summary/cart-summary.component";
import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";
import { AccountComponent } from "./account/account.component";
import { ShippingDetailComponent } from "./shipping-detail/shipping-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { VatAddedPipe } from "./product/vat-added.pipe";
import { ProductFilterPipe } from "./product/product-filter.pipe";
import {Routes, RouterModule} from '@angular/router';
import {
  SimpleNotificationsModule,
  NotificationsService
} from "angular2-notifications";

import { CartService } from "./cart/cart.service";
const appRoutes:Routes=[
  {
    path:"",
    redirectTo:"products",
    pathMatch:"full",
  },
  {
    path:"products",
    component: ProductComponent
  },
  {
    path: "products/:seoUrl",
    component: ProductComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    AccountComponent,
    ShippingDetailComponent,
    NotFoundComponent,
    CartSummaryComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: "apiUrl",
      useValue: "http://northwindapi.azurewebsites.net/api"
    },
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
