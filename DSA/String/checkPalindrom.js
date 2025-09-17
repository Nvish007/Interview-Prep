const checkPalindrom = (str)=>{
    const length=str.length;
    for (i=0;i<Math.floor(length/2);i++){
        if(str[i]!==str[length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrom('madam'));
console.log(checkPalindrom('helloh'));
console.log(checkPalindrom('racecar'));
