// first way to check a Array 

function checkArray(inp) {
   return Array.isArray(inp);
}

console.log(checkArray(1));
console.log(checkArray({}));
console.log(checkArray([1, 2, 3, 4, 5]));



// second way to check a Array 
    

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
