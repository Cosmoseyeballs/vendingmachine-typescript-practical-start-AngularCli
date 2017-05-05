import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import * as c from "../moduls/ProductCategory";
import * as p from "../moduls/Product";
import * as coins from "../moduls/coin";
import { VendingMachineService } from "app/services/vending-machine-config.service";
import { GetProducts } from "app/app.products";
import { ProductService } from "app/services/product.service";
import {Cell} from "../moduls/cell"


@Component({
  selector: 'vm-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})


export class VendingMachineComponent implements OnInit {

  
  paid:number = 0;
  cells = [];
  canPay = ()=> this.paid - this.selectedCell.product.price >= 0;
  selectedCell = new Cell(new p.Initial())
  acceptedCoins: coins.Coin[] = [new coins.Dime, new coins.Quarter(), new coins.Half(), new coins.Dollar()];
  
  //http://stackoverflow.com/a/41093099/816299 => @Inject forwardRef
  constructor(private productService:ProductService,
              @Inject(forwardRef(() => VendingMachineService)) private vendingMachineService: VendingMachineService) {

                
   }

  ngOnInit() {
        for (let index = 0; index < this.vendingMachineService.vendingMachineSize; index++) {
            let product = this.productService.GetProduct(index);
            this.cells.push(new Cell(product));
            console.log(product.name)
        }

  }



  // New we can select a cell
  select(cell:Cell):void{
    cell.sold = false;
    this.selectedCell = cell;
    console.log("select cell click", cell)
  }


  pay():void{
    if(this.selectedCell.stock < 1){
        alert("I´m sorry, we´re out of them!");
        return
    }
    let currentPaid = this.paid
    this.paid = Math.round(((currentPaid - this.selectedCell.product.price) * 100)) / 100;
    this.selectedCell.stock--;
    this.selectedCell.sold = true;

  }

  acceptCoin(coin:coins.Coin){
    let oldTotal = this.paid
    this.paid = oldTotal + coin.value

    console.log("acceptCoin", this.paid)
    console.log("canPay", this.canPay())
    
  }

}


export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}


