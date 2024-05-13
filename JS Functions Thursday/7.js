function ones(num){
    let words =""
    switch(num){
        case 1: words="One ";break
        case 2: words="Two ";break
        case 3: words="Three ";break
        case 4: words="Four ";break
        case 5: words="Five ";break
        case 6: words="Six ";break
        case 7: words="Seven ";break
        case 8: words="Eight ";break
        case 9: words="Nine ";break
        case 10: words="Ten ";break
        case 11: words="Eleven ";break
        case 12: words="Twelve ";break
        case 13: words="Thirteen ";break
        case 14: words="Fourteen ";break
        case 15: words="Fifteen ";break
        case 16: words="Sixteen ";break
        case 17: words="Seventeen ";break
        case 18: words="Eighteen ";break
        case 19: words="Nineteen ";break
    }
    return words
}

function ty(num){
    let word=""
    switch(num){
        case 20: word="Twenty ";break
        case 30: word="Thirty ";break
        case 40: word="Forty ";break
        case 50: word="Fifty ";break
        case 60: word="Sixty ";break
        case 70: word="Seventy ";break
        case 80: word="Eighty ";break
        case 90: word="Ninety ";break
    }
    return word
}

let number=4531
let result=""
if(number>=1000){
    result=ones(parseInt(number/1000))+"Thousand "
    number%=1000
}
if(number>=100){
    result+=ones(parseInt(number/100))+"Hundred "
    number%=100
}
if(number>=20){
    result+=ty(parseInt(number/10)*10)
    number%=10
}
if(number>=1){
    result+=ones(number)
}

console.log(result)