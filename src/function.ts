
function addNor(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNor(5, 10)); // returns 15
// addNor("5", "10"); is not allowed because it is a string type argument


const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}
console.log(addArrow(10, 10)); // returns 20



// object => function => method
const poorUser = {
    name: "Sharafat",
    balance: 5,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

console.log(poorUser.addBalance(10)); // returns 15




const arr: number[] = [1, 2, 3, 4, 5];
const sqrArr = arr.map((num: number): number => num * num);
console.log(sqrArr); // returns [1, 4, 9, 16, 25]