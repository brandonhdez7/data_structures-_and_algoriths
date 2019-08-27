function selectionSort(arr){
    for(let i = 0; i < arr.length; i ++){
        let lowest = i;
        for(let j = i+1; j < arr.length; i++ ){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        let temp = arr[i];
        let[i] = arr[lowest];
        arr[lowest] = temp
    }
    return arr
}

console.log(selectionSort([23,4,324,6,45,3,76,34]))