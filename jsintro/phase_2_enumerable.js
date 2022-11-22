//myEach
Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

Array.prototype.myMap = function(callback){
    let mapped = []
    for(let i=0; i <this.length; i++){
        mapped.push(callback(this[i]))
    }
    return mapped
}
const doubler = (ele) => {
    return ele * 2
}

//console.log([1,2,3].myMap(doubler))
Array.prototype.myReduce = function(callback, acc = this[0]){
    //go through array step by step
    // add current array value
    if (acc !== this[0]){
        for(let i = 0; i < this.length; i++){
           acc = callback(acc, this[i])
        }
    } else {
        for(let i = 1; i < this.length; i++){
           acc=  callback(acc, this[i])
        }
    }
   return acc
}

const reducer = function(acc,ele) {return acc * ele;}

console.log([1,2,3].myReduce(reducer,3))