// Synchronous Coding (or Blocking) works through the code line-by-line, top-down

//   Synchronous tasks happen in order—you must complete the current task before moving on to the next. 

console.log("A")
// this will execute the loop however many times before moving on to logging the B
for(let i=0;i<=100000000000;i++){}
console.log("B")
