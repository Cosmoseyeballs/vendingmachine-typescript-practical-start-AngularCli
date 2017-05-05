import { Injectable } from '@angular/core';
import * as p from "../moduls/Product";


@Injectable()
export class ProductService {
  // product: Array<p.IProduct>;
  //public product: Array<p.IProduct> = []
  public product: Array<p.IProduct> = [];
  constructor() {
    //  product = [];
   }


  InnitProduct(size: number) {
    for (var index = 0; index < size; index++) {

        let random = Math.floor(Math.random() * 4);
        console.log(random)

        let product:p.IProduct;
        switch (random) {
          case 0: product = new p.CocaCola(); break;
          case 1: product = new p.MilkyWay(); break;
          case 2: product = new p.Gummies(); break;
          case 3: product = new p.Hersey(); break;
        }
        console.log(product)
        this.product.push(product);
    }
  
  }


  GetProduct(index: number){
    return this.product[index];
  }
}
