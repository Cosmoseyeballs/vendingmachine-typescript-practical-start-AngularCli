import * as c from "./ProductCategory";

export interface IProduct {
    name: string
    price: number
    category?: c.ProductCategory;
}
export class Initial implements IProduct {
    name = "Please select a product"
    price = 0
}

export class CocaCola implements IProduct {
    name = "Coca-Cola"
    price = 2.30
    category = new c.SodaCategory();
}
export class Gummies implements IProduct {
    name = "Gummies"
    price = 1.90
    category = new c.CandyCategory();
}
export class Hersey implements IProduct {
    name = "Hersey´s"
    price = 1.30
    category = new c.CandyBarCategory();
}

export class MilkyWay implements IProduct {
    name = "Milky Way"
    price = 1.80
    category = new c.CandyBarCategory();
}

