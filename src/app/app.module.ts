import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient} from "@angular/common/http";
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    FooterComponent,
    OrderTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
