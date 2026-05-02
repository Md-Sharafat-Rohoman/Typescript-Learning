
let array: string[] = ["Sharafat", "faru", "Rohoman"];
// array.push(true); is not allowed because it is an array of string type


let mixedArray: (string | number)[] = ["Sharafat", 123, "Rohoman", 456];
mixedArray.push("faru"); // allowed because it is a string type element



let coordinates: [number, number] = [40.7128, -74.0060];
// coordinates.push(100); is not allowed because it is a tuple of two number type elements

let couple: [string, string] = ["Sharafat", "X"];

let sharafatNameAndRoll: [string, number] = ["Sharafat", 123];




// reference type variables : objects
const user: {
    // firstName: "Sharafat",
    readonly firstName: string,
    middleName?: string,
    lastName: string
} = {
    firstName: "Sharafat",
    // middleName: "Rohoman", is optional because of the "?" symbol 
    lastName: "Zafourllah"
}

// console.log(user.firstName = 'hello'); is not allowed because firstName is a constant variable

