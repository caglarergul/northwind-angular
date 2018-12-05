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

import {
  SimpleNotificationsModule,
  NotificationsService
} from "angular2-notifications";

import { CartService } from "./cart/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    AccountComponent,
    ShippingDetailComponent,
    NotFoundComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
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
