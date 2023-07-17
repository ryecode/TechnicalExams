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



// Given # 2 //
const stones = [6,5,5,2,6];
console.log(stones);

const answer = () => {
    let x = 3;
    let k = x+1 ;
        if (stones[x] <= stones[k]); {
            console.log(stones[k]);
            console.log("distance k is ",k);
        }
    let j = x; j > j-1 ; j--;
        if (stones[j] >= stones[j-1]); {
            j--;
            console.log(stones[j]);
            console.log("distance j is ",j)
        }
    let totalDistance = k-j+1;
    console.log("Distance between the frogs is ",totalDistance);
    }
answer();