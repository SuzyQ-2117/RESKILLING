let chemistry = 50
let physics = 50
let maths = 50 

let result = chemistry + maths + physics
let percentage = result * 100/450

console.log("Marks obtained: "+result)
console.log("Percentage: "+percentage)

if (percentage >= 60 ){
    console.log("You have passed the exam")
}

else {
    console.log("You have not passed the exam")
}