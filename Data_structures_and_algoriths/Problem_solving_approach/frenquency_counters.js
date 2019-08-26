function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i= 0; i <arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] * 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

console.log(same([1,2,3],[9,1,4]))


//anagrams

function validAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }

    const lookup= {};
    
    for(let i = 0;i < first.length; i++){
        let letter = first[i];
        //if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i ++){
        letter = second[i];
        //cant find letter or letter is zero then its not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagram('cinema','iceman'));