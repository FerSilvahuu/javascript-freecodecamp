// For se ejectuta "por" un número de veces
const myArr = [2,3,4,5,6];

let total = 0;

for (let i =0; i < myArr.length; i ++) {
    total = total + myArr[i];
}
// console.log(total)

// Anidar blucles for

const arr = [
    [1,2],[3,4],[5,6]
];

for (let i =0; i < arr.length; i++) {
    for(let b=0; b < arr[i].length; b++) {
        //console.log(arr[i][b]);
    }
}

const abc = (arr) =>{
    let product =1;
    for(let i=0; i < arr.length; i ++) {
        for(let b =0; b < arr[i].length; b++) {
            product = product * arr[i][b]
        }
    }
    return product;
}
// abc([[1, 2], [3, 4], [5, 6, 7]]);