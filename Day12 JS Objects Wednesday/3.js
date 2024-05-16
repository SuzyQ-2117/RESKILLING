// CallBack Functions queue functions for processing. You can parse a function TO another function and this queues the function. 

// A function receiving a function is called a Higher Order Function
function doSomething(A){
    // here A is defined as one of the other functions we've already defined, so just add the brackets on the end to call the function that is stored in A as a variable
    A()
}

function takeBackups(){
    console.log("Take Backups")
}

function doInstallations(){
    console.log("Do fresh installations")
}

// remember you can parse values when calling a function by including the content of the variable inside the brackets when you call the function 
doSomething(takeBackups)
doSomething(doInstallations)