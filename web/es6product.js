class Product {
    constructor(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price = price;
    }
    print() {
        setTimeout(()=>{
                    console.log(this.code + "," + this.name + "," + this.price);
        },3000);
    }
}
let  p1 = new Product("P1","Pen",200);
let  p2 = new Product("P2","Marker",100);
p1.print();
p2.print();
let productarray = [new Product("P1","Pen",200),new Product("P2","Marker",100)];

console.log(productarray);