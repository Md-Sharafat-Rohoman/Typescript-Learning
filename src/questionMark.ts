// ? : ternary operator
// ?? : nullish coalescing operator
// ?. : optional chaining operator



const userAge = 21;

const biyerJonnoEligible = (age: number) => {
    // if(age >= 25){
    //     return "You are eligible for marriage.";
    // }
    // else{
    //     return "You are not eligible for marriage.";
    // }

    const result = age >= 20 ? "You are eligible for marriage." : "You are not eligible for marriage.";
    return result;
}

console.log(biyerJonnoEligible(userAge));



// null/undefined coalescing operator
// const userTheme = undefined;
const userTheme = 'Green theme';
const selectedTheme = userTheme ?? "light";
console.log(selectedTheme);



// optional chaining operator
type User = {
    name: string;
    address?: {
        city: string;
        country: string;
    }
}

const user: User = {
    name: "sharafat",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

// console.log(user.address.city); // Error: Cannot read properties of undefined (reading 'city')
console.log(user.address?.city); // undefined