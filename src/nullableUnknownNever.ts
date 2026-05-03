const getUser = (input:string) =>{
    if(input){
        console.log(`User input: ${input}`);
    }
    else{
        console.log("All user input provided.");
    }
}
getUser("Hello, TypeScript!");
getUser("");


// unknown type
const discountCalculate =(input: unknown ) => {
    if(typeof input === "number"){
        const discount = input * 0.1;
        console.log(discount);
    }
    else if(typeof input === "string"){
        const [discountPrice] = input.split(" ");
        console.log(Number(discountPrice)* 0.1);
    }
    else {
        console.log("wrong input")
    }
}

discountCalculate(100);
discountCalculate("100 tk")
discountCalculate(null)





// void
const throwError = (msg:string):void => {
    throw new Error(msg)
}
throwError("error occurred....")