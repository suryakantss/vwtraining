//constructor function
function Product(code,name,price){
    this.code = code;
    this.name = name;
    this.price = price;
    this.print = function(){
        console.log(this.code+","+this.name+","+this.price);
    }
}
var p = new Product("P1","Mouse",500);
p.print();