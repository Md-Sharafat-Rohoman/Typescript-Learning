type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
}

// console.log(getDashboard("admin"));
// console.log(getDashboard("user"));
// console.log(getDashboard("guest"));




type Employee = {
    name: string;
    phoneNo: string;
}
type Manager = {
    designation: string;
    teamSize: number
}

// type EmployeeManager = Employee & Manager;
const employeeManager: Employee & Manager = {
    name: "sharafat",
    phoneNo: "01615879508",
    designation: "Team Lead",
    teamSize: 5
}
console.log(employeeManager);