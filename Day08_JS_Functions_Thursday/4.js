function Payslip(name,salary){
    let tax=0
    if(salary>=2000){
        tax = salary * 0.20
    }else{
        tax = salary * 0.10
    }
    console.log("Name of employee: ",name)
    console.log("Salary: ",salary)
    console.log("------------------------------")
    console.log("Tax calculated: ",tax)
    console.log("Net salary: ",salary - tax)
    console.log("------------------------------")
}

Payslip("SuzyQ",2500)