function binarySearch(arr,elem){

    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem){
        if(elem < arr[middle]){
            end = middle -1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    return middle

}
console.log(binarySearch([2,3,5,7,9,13,45,53,55,63,434,502,534,634,722],5))