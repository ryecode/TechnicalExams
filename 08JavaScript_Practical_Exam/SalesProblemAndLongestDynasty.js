// A. Sales Problem (5 Pts)

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


// B. Longest Reining Dynasty (5 Pts)

let dynastyReign = [
    {
        dynasty: "MLBB Dynasty",
        year: "IIMIIMXX"
    },
    {
        dynasty: "Lato-Lato Dynasty",
        year: "IIMIIMXXIII"
    },
    {
        dynasty: "Rye Dynasty",
        year: "MMMM"
    }
]


function value(r)
{
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}


function convertYear(str)
{
    for (let x = 0; x < dynastyReign.length ; x++) {
        let str = dynastyReign[x].year;
        let res = 0;
     
         for (i = 0; i < str.length; i++)
         {
             var s1 = value(str.charAt(i));
     
             if (i + 1 < str.length)
             {
                 var s2 = value(str.charAt(i + 1));
     
                 if (s1 >= s2)
                 {
                     res = res + s1;
                 }
                 else
                 {
                     res = res + s2 - s1;
                     i++;
                 }
             }
             else 
             {
                 res = res + s1;
             }
         }
            dynastyReign[x].year = res ;            
    } 
}
convertYear();

function longestDynasty (res) 
{
    for (let r = 0; r < dynastyReign.length ; r++) {
        let start = 1000; 
        if (r == 0) {
            let firstReign = dynastyReign[r].year - start ;
            console.log(dynastyReign[r].dynasty, "reigned for ", firstReign, "years.");    
        } else {
            let nextReign = dynastyReign[r].year - dynastyReign[r-1].year;
            console.log(dynastyReign[r].dynasty, "reigned for ", nextReign, "years.");
        }
    }
    dynastyReign.sort((reign1, reign2) => reign2.year - reign1.year)
    console.log("Longest Reign is", dynastyReign[0].dynasty);
}
longestDynasty();