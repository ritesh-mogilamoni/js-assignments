/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:*/


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

console.log(transactions.filter(t=>t.type==="credit"))

console.log(transactions.map(t=>t.amount))

console.log(transactions.reduce((bal,t)=>{
    if(t.type==="credit")
        return bal+t.amount
    else
        return bal-t.amount
},0))

console.log(transactions.find(t=>t.type==="debit"))

console.log(transactions.findIndex(t=>t.amount===10000))


/*Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/