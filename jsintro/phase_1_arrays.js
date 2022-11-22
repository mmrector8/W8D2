Array.prototype.uniq = function (){
    let uniq = [];
    for(let i = 0; i < this.length; i++){
        if (!uniq.includes(this[i])){
            uniq.push(this[i]);
        }
    }
    return uniq;
}

// console.log([1,1,1,2,2,3].uniq())

Array.prototype.twoSum = function (){
    let twoSumR = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j< this.length; j++){
            if(this[i] + this[j] === 0){
                twoSumR.push([i, j]);
            }
        }
    }
    return twoSumR
}

// console.log([1,1,-3,1,2,-1,2,3].twoSum())

Array.prototype.transpose = function (){
    let transposeR = [];
    for(let i = 0; i < this[0].length; i++){
        transposeR.push([]);
        for(let j = 0; j < this.length; j++){
            transposeR[i].push(this[j][i]);
        }
    }
    return transposeR
}

// [[ 2, 7 ], [ 3, 5 ]] => [[2, 3], [7, 5]]
//console.log([[ 2, 7, 4 ], [ 3, 5, 6 ]].transpose()) 

