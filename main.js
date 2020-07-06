console.log(users)
// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}



//KATA0

const greenEyes1 = users.filter(user => user.eyeColor === "green")
//OR...
//const greenEyes2 = users.filter(function (user) {
//return user.eyeColor === "green"
//})
printKata(0, greenEyes1)

//Kata 1: Use the .filter() method
//Filter the users array to show only the users with an isActive property
// of true.
const activeUsers = users.filter(user => user.isActive === true)
printKata(1, activeUsers)



//Kata 2: Use the .map() method
//Map over the users array to show only the email addresses of the users.


const usersEmail = users.filter(user => users.includes(user.usersEmail))
    .map(user => user.usersEmail)
printKata(2, usersEmail)

//const usersEmail = users.map(user => user.usersEmail)
//const usersEmail = users.map(user => user.usersEmail)



// //Kata 3: Use the .some() method
// //Check whether at least one user in the users array has a company property of "OVATION".


const user = users.some(user => user.company === "OVATION")
printKata(3, user)


// //Kata 4: Use the .find() method
// //Find the first user in the array over the age of 38.




//  const users = [{
//  age: 38

// }];
const array = users.find(element => element > 38)
//const usersAge = users.find(user => user.usersAge = 38)

printKata(4, array)


// //Kata 5: Use the .filter() and .find() methods
// //Find the first user in the array over the age of 38 who is active.

//const user = user.filter(user =>firstUser)

const firstUser = users.filter(user => user.firstUser === 38)
    .find(user => user.firstUser)
printKata(5, firstUser)
//const usersAgeLarger = users.find(user => user.usersAgeLarger === "users age larger")
//const usersActive = users.filter(user => user.usersActive === "user active")


// //Kata 6: Use the .filter() and .map() methods
// //Show the balance of every user in the array from the "ZENCO" company.


const data = users.filter(user => user.company === "ZENCO")
    .map(user => user.balance)

printKata(6, data)



// //Kata 7: Use the .filter() method with .includes() and the .map() method
// //Show the age of every user with the "fugiat" tag.


const ages = users.filter(user => users.includes(user.tags === "fugiat"))
    //.includes(user => user.tag)
    .map(user => user.age)
printKata(7, ages)
       // .filter(data => {
          //  return data.type === 'first user';
       // }).map((firstUser) => {
       //     return firstUser.age()
       // }).reduce((data, age) => {
       //     return data + age;
       // });
//    

//     // }];




