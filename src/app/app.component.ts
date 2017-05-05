import { Component } from '@angular/core';
import { VendingMachineService, VendingMachineConfigSettings } from "app/services/vending-machine-config.service"; 
import { VendingMachineSize } from "app/vending-machine/vending-machine.component";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // her we can configure the VendingMachineConfigSettings 
   constructor(productService:ProductService, vendingMachineService:VendingMachineService){

    let config: VendingMachineConfigSettings = {
      vendingMachineSize : VendingMachineSize.medium
    }
    productService.InnitProduct(VendingMachineSize.medium );
    vendingMachineService.configure(config);
 }



}
