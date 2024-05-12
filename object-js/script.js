// let user = {
//     username:"Олег",
//     age:32,
//     password:"12345",
//     "i like JavaScript": false
// }
// let kkk = prompt("Что вы хотите узнать о пользователе?", "name");

// delete user.password;

// user["i like JavaScript"] = true;

// alert(user["i like JavaScript"]);
// alert(user[kkk])

// console.log(user)
// alert(user.password);



// let fruit = prompt("Ваш любимый фрукт?", "banana")

// let bbc = {
//     [fruit]: 10
// }

// alert(bbc.banana)

// function createUser(name, age) {
//     return {
//         name:name,
//         age: age
//     }
// }

// let user = createUser("Олег", 32);
// alert(user.name)

// let user = {
//     name: "Олег",
//     age: 32
// }

// alert("name" in user)

// const user = {
//     id: null,
//     name: '',
//     address: {
//         street: '',
//         city: '',
//         state: '',
//         zip: '',
//         country: '',
//         coordinates: {
//             latitude: null,
//             longitude: null
//         }
//     },
//     contact: {
//         phone: '',
//         email: '',
//         socialMedia: {
//             facebook: '',
//             twitter: '',
//             instagram: ''
//         }
//     },
//     employment: {
//         company: '',
//         title: '',
//         department: {
//             name: '',
//             location: ''
//         }
//     }
// };

// const checkData = (data) => {

//     const isEmpty = Object.values(data).every(value => {

//         if (typeof value === 'object' && value !== null) {

//             return checkData(value);
//         }

//         return !value;
//     });

//     return isEmpty ? 'Все поля пусты' : 'Ok';

// }

// console.log(checkData(user))


const user = {
    name: "Олег",
    age: 22,
}

new Promise(function(resolve, reject) {

    if (user.name && user.age) {

        resolve("ахуенно")

    } 
    else {

        reject("не ахуенно")

    }

})

console.log(Promise);