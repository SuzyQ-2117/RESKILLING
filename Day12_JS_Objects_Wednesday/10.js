class Employee{
 
    constructor(name1,salary){
        this._employeename=name1;
        this._employeesalary=salary;
    }
 
    details(){
        console.log("Name:",this.employeename)
        console.log("Salary:",this.employeesalary)
        console.log("Tax:",this.employeesalary*15/100)
    }
}
  
let  emp1= new Employee("Shafeeq",2000)
let  emp2= new Employee("James",12000)

emp1.details()
console.log("----------------")
emp2.details()