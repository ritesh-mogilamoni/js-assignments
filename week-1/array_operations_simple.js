const temperatures = [32, 35, 28, 40, 38, 30, 42];

console.log(temperatures.filter(temp=>temp>35))

console.log(temperatures.map((temp)=>(temp*1.8)+32))

//console.log(temperatures)

console.log("Avg is:", temperatures.reduce((sum,temp)=>sum=sum+temp,0)/temperatures.length)

console.log("find() first temperature above 40:",temperatures.find(temp=>temp>40))

console.log("findIndex() of temperature 28:",temperatures.findIndex(temp=>temp===28))
