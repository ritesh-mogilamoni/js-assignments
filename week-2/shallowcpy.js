/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:*/
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

              let userCopy={...user}  //Creating a shallow copy of user
              userCopy.name="Raju"    //Changing name in the copied object
              userCopy.preferences.theme="light"  //Changing preferences.theme in the copied object

              console.log(user,userCopy)  //.Log both original and copied objects
/*
🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/