import * as p from "../moduls/Product";

export class Cell {
    constructor(public product: p.IProduct) {

    }
    stock = 3
    sold = false
}