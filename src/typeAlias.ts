
type User = {
    id: number,
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    gender: "male" | "female",
    age: number,
    isMarried: boolean,
    hobbies: string[],
}

const user1: User = {
    id: 1,
    name: {
        firstName: "sharafat",
        middleName: "hossain",
        lastName: "sarkar"
    },
    gender: "male",
    age: 30,
    isMarried: false,
    hobbies: ["coding", "reading", "gaming"]
};

const user2: User = {
    id: 2,
    name: { firstName: "sadia", middleName: "sultana", lastName: "sarkar" },
    gender: "female",
    age: 25,
    isMarried: true,
    hobbies: ["cooking", "traveling", "dancing"]
};

console.log(user1);
console.log(user2);

type AddFunc = (number: number, number2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
console.log(add(5, 10));