import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ VendingMachineService }from "./services/vending-machine-config.service"
import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { CellsComponent } from './cells/cells.component';
import { ProductService } from "app/services/product.service";

@NgModule({
  declarations: [
    VendingMachineComponent,
    AppComponent,
    CellsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    VendingMachineService,
    ProductService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
