/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

console.log(employees.filter(element=>element.department="IT"))

console.log(employees.map(element=>element.netSalary=element.salary+(0.10*element.salary)))

console.log(employees.reduce((sum,element)=>sum+element.salary,0))

console.log(employees.find(element=>element.salary===30000))

console.log(employees.findIndex(element=>element.name==="Neha"))

/*Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/