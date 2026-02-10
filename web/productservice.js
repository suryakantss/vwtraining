class ProductService {
     products = [ 
        {code:'P1',name:'Mouse',price:400},
        {code:'P2',name:'Keyboard',price:1400},
     ];
    getAllProducts(){
            return this.products;
    }
    getAllProductsAsync(){
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
            resolve(this.products);
            },3000);
        }); 
        return p;
    }
}
//**************************************** */
let ps = new ProductService();
//ps.getAllProducts().forEach(p=> console.log(p.code+","+p.name+","+p.price))

ps.getAllProductsAsync().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
});

console.log("*******************");
console.log("*******************");
