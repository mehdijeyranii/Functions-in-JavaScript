function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
