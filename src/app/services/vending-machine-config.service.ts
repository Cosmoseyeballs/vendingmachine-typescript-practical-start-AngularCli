import { Injectable } from '@angular/core';
import { VendingMachineSize } from "app/vending-machine/vending-machine.component";


export interface VendingMachineConfigSettings{
  vendingMachineSize?: VendingMachineSize
}

@Injectable()
export class VendingMachineService {
  vendingMachineSize = VendingMachineSize.medium;
  configure(settings:VendingMachineConfigSettings){
    Object.assign(this,settings)
  }

}
