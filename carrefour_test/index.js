
var products = [2,89,5,4,9];
var discount  = Math.floor(Math.random() * 99 + 1); // generate random from 1 to 99
function checkout(tab,discount){
    tab.sort(function(a,b){
        return a-b;
    });
    var maxiProd = tab.pop();
    maxiProd -= (maxiProd * discount / 100);
    tab.push(maxiProd);
    var result = tab.reduce(function(acc,val){
        return acc+val;
    },0); 
    return Math.floor(result) ;
}

console.log(checkout(products,discount));