//bubble sort

//we have an array

// while not sorted
//loop through the array
// if element zero is greater than the one next to it, switch them
// set to unsorted again to check again
// keep switching until sorted

Array.prototype.bubbleSort = function (){
    let sorted = false

    while (!sorted){
        sorted = true
        for(let i = 0; i < this.length; i++){
            if(this[i]> this[i+1]){
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp ;
                sorted = false;
            }
        }
    }
    return this
}
array = [5,1,4,20,1,9,101]
// console.log(array.bubbleSort())

String.prototype.substrings = function (){
    let substringR = [];
    let stringArr = this.split("");      // to get parts of a string, you would need to split it into an array
    for(let i = 0; i < stringArr.length; i++){
        for(let j = i; j< stringArr.length; j++){
            substringR.push(stringArr.slice(i, j + 1).join("")) // slice is non-inclusive, slice does not work on strings 
        }
    }
    return substringR
}

// console.log("flag".substrings())
