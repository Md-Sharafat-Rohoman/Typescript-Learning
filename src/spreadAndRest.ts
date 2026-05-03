
const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve"];
const collageFriends = ["Frank", "Grace"];

// const allFriends = [...friends, ...schoolFriends, ...collageFriends];   
// console.log(allFriends);

friends.push(...schoolFriends);
friends.push(...collageFriends);
// console.log(friends);


const user: { name: string; phoneNo: string } = { name: "sharafat", phoneNo: "01615879508" };
const otherInfo: { hobby: string; profession: string } = { hobby: "coding", profession: "web developer" };

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);


// arrow function with rest parameter
const sendInvite = (...friends:string[]) =>{
    // console.log(friends); 
    friends.forEach((friends:string) => console.log(`Dear ${friends}, you are invited to the party!`));
}
sendInvite("Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace");
