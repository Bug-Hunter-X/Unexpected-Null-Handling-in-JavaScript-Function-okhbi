function foo(a, b) {
  //Explicitly check for null and falsy values
  if (a === null || a === 0 || a === false || a === "" || b === null || b === 0 || b === false || b === "") {
    return null; 
  }
  return a + b; 
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0,2)); //null
console.log(foo(1,false)); // null
console.log(foo(1,"")); // null