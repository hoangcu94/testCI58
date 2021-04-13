let str = prompt("Enter your check string");
let arr = str.split("");
let newStr = arr.reverse().join("");
// console.log( newStr);
if (str == newStr) {
    console.log("TRUE");
} else {
    console.log("False")
};