
// Remove Duplicates
function removeDublicate(str) {
    const text = str.toLowerCase();
    let noDuplicate = '';
    for(let i =0; i< text.length; i++) {
        if(!noDuplicate.includes(text[i])) {
            noDuplicate += text[i];
        }
    }
    return noDuplicate;
}
console.log(removeDublicate('AAnil'));


// Missing Number In Array
function missingnumber(arr, n) {
    const expectedNumber = n*(n+1)/2;
    const actualNumber = arr.reduce((sum, item) => sum+item, 0);
    return expectedNumber-actualNumber;
}

const arr = [1,2,4,5];
const arrSize = 5;
console.log(missingnumber(arr, arrSize));


//Reverse a string

function reverseString() {
    const str = 'anil kumar';
    const newstr1 = str.split('').reverse().join('');
    console.log(newstr1);
    let newstr2 = '';
    for(let i =str.length-1; i>=0; i--) {
        newstr2 += str[i];
    }
    console.log(newstr2);
}
reverseString();


// longest word in the string
function longestword(str) {
    const string1 = str.split(' ');
    let longestword = '';
    for(let i = 0; i<string1.length; i++) {
        if(string1[i].length > longestword.length) {
            longestword = string1[i];
        }
    }
    console.log(longestword);

}

longestword('Check if a string contains only unique characters');

// Remove all whitespace from a string
function removewhiteSpace() {
    const text = 'a b e v e g e anil';
    let newtext = '';
    for(let i= 0; i< text.length; i++) {
        if(!text[i].includes(' ')) {
            newtext += text[i];
        }
    }
    console.log(newtext);
}

removewhiteSpace();

// Find the longest substring without repeating characters
// new anil