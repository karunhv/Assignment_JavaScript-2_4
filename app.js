var Employee_1 = {
  name : "Karunakar",
  age: 30,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_2 = {
  name : "Adithi",
  age: 27,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_3 = {
  name : "Divakar",
  age: 25,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_4 = {
  name : "Dharithri",
  age: 30,
  salary : 10000,
  Address:{
    city: "Mysore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_5 = {
  name : "Santosh",
  age: 30,
  salary : 10000,
  Address:{
    city: "Coorg",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee = [Employee_1, Employee_2, Employee_3, Employee_4, Employee_5]; //Array of Employees
var count = 0;
//For Loop
for(count in Employee)
{
  console.log("Name: " + Employee[count].name);
  console.log("Age: " + Employee[count].age);
  console.log("Salary: " + Employee[count].salary);
  console.log("City: " + Employee[count].Address.city);
  console.log("State: " + Employee[count].Address.state);
  console.log("PinCode: " + Employee[count].Address.pincode);
}
