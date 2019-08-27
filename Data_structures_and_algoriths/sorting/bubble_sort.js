//dummer version

function bubbleSort1(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j ++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort1([23,234,23,423,42,34,32,2352,34,243,42,4223,4]))


//optimize
