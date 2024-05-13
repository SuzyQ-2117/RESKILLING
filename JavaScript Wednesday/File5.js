let bill = 20
let paid = 108
let balance = paid - bill

console.log("Balance is: "+balance)
console.log("--------------------")

if (balance >= 50) {
    let n50 = parseInt(balance / 50)
    console.log("£50: "+n50)
    balance = balance % 50
}

if (balance >= 20) {
    let n20 = parseInt(balance / 20)
    console.log("£20: "+n20)
    balance = balance % 20
}

if (balance >= 10) {
    let n10 = parseInt(balance / 10)
    console.log("£10: "+n10)
    balance = balance % 10
}

if (balance >= 5) {
    let n5 = parseInt(balance / 5)
    console.log("£5: "+n5)
    balance = balance % 5
}

if (balance >= 2) {
    let n2 = parseInt(balance / 2)
    console.log("£2: "+n2)
    balance = balance % 2
}

if (balance >= 1) {
    let n1 = parseInt(balance / 1)
    console.log("£1: "+n1)
    balance = balance % 1
}
