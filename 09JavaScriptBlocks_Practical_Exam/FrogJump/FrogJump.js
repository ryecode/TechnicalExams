console.log("Connected");
// Given # 1 //
const blocks = [2,6,8,5];
console.log(blocks);

const solution = () => {
    let k = 0; k < blocks.length ; k++;
    {
        let j = 0;
        x = k+1 ;
        if (blocks[k] <= blocks[x]); {
            k++;
            console.log(blocks[k]);
            let distance = k - j + 1;
            console.log("Longest possible distance is ",distance);
        }
    }
}
solution();

// Given # 2 //
const stones = [1,5,5,2,6];
console.log(stones);

const answer = () => {
    let x = 3;
    let k = x; k < stones.length ; k++;
        if (stones[x] <= stones[k]); {
            console.log(stones[k]);
            console.log("distance k is ",k);
        }
    let j = x; j > j-1 ; j--;
        if (stones[x] <= stones[j-1]); {
            j--;
            console.log(stones[j]);
            console.log("distance j is ",j)
        }      
    let totalDistance = k-j+1;
    console.log("Distance between the frogs is ",totalDistance);
    }
answer();