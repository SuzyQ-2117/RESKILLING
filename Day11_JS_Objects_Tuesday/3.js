let ones=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
let ty=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]

let number=5654
let result=""
if(number>=1&&number<10000){
    if(number>=1000){
        result=ones[parseInt(number/1000)]+" Thousand "
        number%=1000
    }
    if(number>=100){
        result+=ones[parseInt(number/100)]+" Hundred"
        number%=100
    }
    if(number>=20){
        result+=ty[parseInt(number/10)]
        number%=10
    }
    if(number>=1){
        result+=ones[parseInt(number)]
    }
}
console.log(result)