let string = "Hello world"
console.log(`Total length of the string is ${string.length}`);

//Example 1
let worldlength = string.substring(6,11);
console.log(`Substring "world" length is ${worldlength.length}`);

//Example 2
let string1 = " fly me to the moon "
let newstr1 = string1.trim()
let newstr2 = newstr1.split(" ");
console.log(newstr2[4]);
let newstr3 = newstr2[4].length;
console.log(newstr3);

/*Example3
"listen","silent" - true
"hello","world" - flase
*/

function isAnagram(str1, str2) {
    if (str1.length!== str2.length) {
        return false;
    }
    
    let newstring1 = str1.toLowercase.split().sort().join();
    let newstring2 = str2.toLowercase.split().sort().join();

    return newstring1 === newstring2
}
isAnagram("listen","silent");
isAnagram("hello","world");







