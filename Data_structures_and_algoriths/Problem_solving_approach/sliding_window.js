function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max
}    

console.log(maxSubarraySum([2,6,9,3,4,5,6,3],3))



//divide and conquer


//linear search
function search(arr,val){
    for (let i = 0; i < arr.length; i ++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}

console.log(search([1,2,4,5,6,4,3],5))


//binary search

function binary(array,val){
    let min = 0;
    let max = array.length -1;

    while(min <= max){
        let  middle = Math.floor((min +max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val){
            min = middle + 1;
        }
        else if(array[middle] > val){
            max = middle - 1
        }else{
            return midddle
        }
    }
    return -1

}
console.log(binary([1,2,3,4,43,52,45],20))


