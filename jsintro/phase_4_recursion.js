function range(start, end){
    if(start===end){
        return [end];
    }
    return range(start, end-1).concat(end)
}

let start = 1 
let end = 7


//console.log(range(start, end))


function sumRec(arr) {
    if (arr.length === 0){
        return 0;
    } 
    let num = arr.shift();
    return sumRec(arr) + num
}
let arr = [1, 2, 3]

//console.log(sumRec(arr))

function exponent(base, exp) {
 if (exp === 0) return 1

 return base * exponent(base, exp-1)
}

//console.log(exponent(3,3))

const fibonacci = (n) => {
    if (n === 1) return [0]
    if (n === 2) return [0,1]
    
    let fib = fibonacci(n-1)
    return fib.concat(fib[fib.length-1] + fib[fib.length-2])
}

console.log(fibonacci(4))