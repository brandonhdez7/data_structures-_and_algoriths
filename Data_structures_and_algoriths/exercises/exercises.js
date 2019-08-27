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








