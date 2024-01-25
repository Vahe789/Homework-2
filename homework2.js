// Implement 
// String.charCodeAt()
// String.concat()
// String.endsWith()
// String.lastIndexOf()
// String.repeat()
// String.replace()
// String.slice()
// String.split()
// String.startsWith()
// String.substring()

// use charCodeAt method

function charCodeAt(string, index) {
    let charCodeAt = string[index];
    return charCodeAt;
  }
console.log(charCodeAt('The quick brown fox jumps over the lazy dog.', 2));


// 1. use concat

function concat(word1, word2) {
    let newStr = "";
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (i < word1.length && j < word2.length){
                newStr = word1 + " " + word2
            }
           
        }
    }
    return newStr
}

console.log(concat("Hello", "World"))



// use endsWith method

function endsWith(str, subStr) {
    let endsWith = true
    for (let i = str.length - 1; i >= 0; i--) {
        for (let j = subStr.length; j >= 0; j--) {  
       if (str[i] === subStr[j] && endsWith) {
        return true
       } 
    }
}
return false
}

console.log(endsWith("My car is yours", "yours"));

// use lastIndexOf method

function lastIndexOf(str, ch) {
    for (let i = str.length - 1; i >=0; i--) {
      if(str[i] == ch){
      return i
    } 
}
return -1
}
console.log(lastIndexOf("Hello", "o"));


// use repeat method

function repeatStrNumTimes(str, num) {
    let result = ""
    for (let i = 0; i < num; i++) {
        result += str
}
return result

}
console.log(repeatStrNumTimes("Hello", 3));

// use split method

function split(string, splitParameter)  {
    storedString = '';
    arrayString = [];
    
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== splitParameter) {
                storedString+=string[i];  
            } else if (string[i] === splitParameter) {
                arrayString.push(storedString);
                storedString = '';
                continue;
            }
        }
    
        if(storedString !== '') {
            arrayString.push(storedString);
        }
    
        return arrayString;
    }
    

console.log(split("this is a sentence", " "));

// use startsWith method

function startsWith(string, starter) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < starter.length; j++) {
      if (string[i] == starter[i]) {
        return true;
      }
    }
    }
    return false;
  }
console.log(startsWith("Friday night", "Fr"));

// use substring method


function isSubstring(str, sub){
    if(sub.length > str.length) return false;
    for(let i = 0; i < str.length - sub.length + 1; i++){
      if(str[i] !== sub[0]) continue;
      let exists = true;
      for(let j = 1; j < sub.length && exists; j++){
          if(str[i+j] === sub[j]) continue;
          exists = false;
      }
      if(exists) return true;
    }
    return false;
  }


console.log(isSubstring("Google chrome", "chrome"));




