export abstract class ProductCategory{
    protected imgPath = "assets/img/";
    name:string
    abstract getImageUrl():string;
}

export class SodaCategory extends ProductCategory{
    name = "Soda";
    getImageUrl(){
        return this.imgPath + "sodacan.png";
    }
}
export class ChipsCategory extends ProductCategory{
    name = "Potato chips";
    getImageUrl(){
        return this.imgPath + "chips.jpg";
    }
}
export class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(){
        return this.imgPath + "candy.jpg";
    }
}
export class CandyBarCategory extends ProductCategory{
    name = "Candy bar";
    getImageUrl(){
        return this.imgPath + "candybar.jpg";
    }
}