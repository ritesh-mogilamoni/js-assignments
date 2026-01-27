/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:*/

                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

                orderCopy=structuredClone(order)  //Creating a deep copy of order

                orderCopy.customer.address.city="Karimnagar"   //Modifying customer.address.city in copied object
                orderCopy.items[0].price=9000   //Modifying items[0].price in copied object

                console.log(order,orderCopy)  //Verify original object remains unchanged
/*

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/