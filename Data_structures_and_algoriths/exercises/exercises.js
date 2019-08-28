//plaindrome
//#1
function isPalindrome(str){
    return str == str.split('').reverse().join('') ? true :false;
      
  }
  console.log(isPalindrome('racecar'));


  //plaindrome
  //#2
  function isPalindrome(str){
    //use regular expresion
    let reg = /[\W_]/g
    //create a new variebale called smallstring set it equal to 
    //str and lower case and replace it with the reg variebale.
    let smallString = str.toLowerCase().replace(reg,'')
    let reversed = smallString.split('').reverse().join('');
    if(reversed === smallString) {
        return true
        }else{
            return flase
        }
}
console.log(isPalindrome('racecar'));



//capitalizedFirst Array
function capitalizeFirst (arr) {
    for(let i = 0;i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr
}
  
  console.log(capitalizeFirst(['car','taco','banana']));



//capitalizedAll Array
function capitalizeAll (arr) {
    for(let i = 0;i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
    }
    return arr
}
  
  console.log(capitalizeAll(['car','taco','banana']));
  

//reverse string
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
console.log(reverse('house'));



//finding largest number
function largestNumber(arr){
    let max = [];
    //set an empty variable were the largest numbers will be stored later on
    for(let i = 0; i < arr.length; i++){
        tempMax = arr[i][0]
        for(let j = 0; j < arr[i].length; j++){
            let currentElement = arr[i][j];
            if(currentElement >= tempMax){
                tempMax = currentElement
            }
        }
        max.push(tempMax);

    }
    return max;
}

console.log(largestNumber([[4,3,25,6,2],[234,423,32,34,234],[234,23,45,664,23]]))





