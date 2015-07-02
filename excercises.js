// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
function max(a,b) {
    if(a > b){
        alert(a + " is the greater number")
        return a;
    }else}
        alert( b +" is the greater number");
        return b;
    }

    console.log(max(7,-2));
// }

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if (x > y && x > z)
        return x;
    else if (y > x && x >Z)
        return y;
    else
        return z;



    //...
}
console.log(maxOfThree(3,2,9));


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){

    if ( char === 'a' ||char === 'e' ||char === 'i' ||char === 'o' ||char === 'u') {
        return true;
    }else{
        return false;
    }
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
     var arr = phrase.split("");
     var rovArray = [ ];
     arr.forEach(function(x) {
       if (x !== 'a' && x !== 'e' && x !== 'o' && x !== 'u')
        {emptyArray.push(x = 'o' + x);
    }else{
        emptyArray.push(x)};

    });
    return emptyArray.join("");
     }




    ...


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array) {
    return array.reduce(function(x,y) {
        return x + y;
    });

    //...
}

function multiply(array) {
    return array.reduce(function(x,y) {
        return x * y;
    })
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){for (var i = string.length - 1; i >= 0; i--) {
    new_str += string[i];
  }
  return new_str;
}

console.log(reverse('jag testar'));
var string = 'ratset gaj';
console.log(new_str === string);
    //...

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var str = words.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return arr.filter( function(a) { return a.length > i} );



};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var chars = string.split('');
    var charList = { };
    return;

    char.forEach(function(char) {
        if(charList[char] === undefined)

    }) { else }

    charFreq('abbabcbdbabdbdbabababcbcbab');


}
