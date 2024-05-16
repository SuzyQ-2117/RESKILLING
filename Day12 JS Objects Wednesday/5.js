// Asynchronous Coding still works through the code line-by-line but it doesn't wait for each line to complete

// Asynchronous tasks are executed in any order or even at once

function display(){
    console.log("Hello my friends")
}

console.log("A")
setTimeout(display,3000)
console.log("B")

// this function will log A to the console, start the timer of 3 seconds for the callback function, log B to the console and then the timer will complete