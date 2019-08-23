charCount('your PIN number is 1234!')

function charCount(str){

//make an object and return at end    
let result = {};

    //loop over string for each characther
    for(let i = 0; i < str.length; i++){

        //remame string index to new variable
        let char = str[i]

        //if the char is a number/letter and is a key in the object,
        //add one to count
        if(result[char] > 0){
            result[char]++;

            //if the char is a number/letter and not in object, add 
            //set value to 1
        }else{
            result[char] = 1;
        }
    }
    return result;
}

console.log(charCount('your PIN number is 1234!'))



function validateCode(){
    var TCode = document.getElementById('TCode').value;
    if( /[^a-zA-Z0-9]/.test( TCode ) ) {
       alert('Input is not alphanumeric');
       return false;
    }
    return true;     
}