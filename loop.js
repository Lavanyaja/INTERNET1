for (let i = 1; i <= 10; i++){
    console.log(i)
}

let n = 5;
let factorial = 1;
for(let i = 1; i <=n; i++){
   factorial = factorial = i;
}

console.log("factorial of", n, "is", factorial)

let count=0;
let sum = 0;
let last=100;

while(count <= last){
   sum = sum + count;
   count++;
}
console.log('sum is', sum);

let num = 3;
let table = [];
for(let i = 1; i <=10; i++){
   table.push(num * i);
}
console.log('table of', num, 'is', table);