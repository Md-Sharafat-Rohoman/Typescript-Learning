// object destructuring
const user = {
    name: "sharafat",
    select: {
        hobby: "coding",
        profession: "web developer"
    },
    age: 30,
    city: "Dhaka"
}
// console.log(user.select.hobby)
const { name: myName, select, age, city } = user;
// console.log(name,select,age,city);
console.log(myName)


// array destructuring
const numbers = [1, 2, 3,4,5,6,7,8,9];
// const [,b,] = numbers;
const [a,b,...rest] = numbers;
console.log(rest);
