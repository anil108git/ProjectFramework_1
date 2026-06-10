
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


