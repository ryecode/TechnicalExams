let productProfitArray = [
    {
        name: "Product A",
        profit: 15
    },
    {
        name: "Product B",
        profit: 75
    },
    {
        name: "Product C",
        profit: 175
    },
    {
        name: "Product D",
        profit: -15
    },
]
console.log("Product List", productProfitArray);

function topProduct () {
    productProfitArray.sort((product1, product2) => product2.profit - product1.profit)
        console.log("Top Product: ", productProfitArray[0]);
}
topProduct();


function bottomProduct () {
    productProfitArray.sort((product1, product2) => product1.profit - product2.profit)
        console.log("Bottom Product: ", productProfitArray[0]);
}
bottomProduct();


function zeroProfitProduct()
{
    if(!productProfitArray.length){
        console.log("No Data");
    }    
    let closest = 0;
    
    for (let i = 0; i < productProfitArray.length ; i++) {
        if (closest === 0) {
            closest = productProfitArray[i];
        } if (productProfitArray[i].profit > 0 && productProfitArray[i].profit <= Math.abs(closest)) {
            closest = productProfitArray[i];
        } else if (productProfitArray[i].profit < 0 || - productProfitArray[i].profit < Math.abs(closest)) {
            closest = productProfitArray[i].profit;
        }
    }
    console.log("Product closest to zero Profit: ", closest);
}
zeroProfitProduct();

