/* The "new" command serves to create instances through a constructor function. */

function User(name, email) {
  this.name = name;
  this.email = email;

  this.showInfos = function () {
    return `Name: ${this.name}, Email: ${this.email}`;
  };
}

/* Creating objects with the "new" keyword. */

/* When we create an object through "new", which calls the constructor function, JavaScript will do three things, they are:

  1. It will create a new object, that is, the constant "newUser" will receive a new object. 
  
  2. The JS will check, on the prototype, what should fit in the prototype chain. What will be inserted in the chain of prototypes will be the methods and properties of "User", because the "User" will be the prototype of the object "newUser", which was created now. 
  
  3. The context of the "newUser" object will be the context for the "this" of this object. Thus, the context will be the "name" and "email" properties. */
const newUser = new User("Juliana", "j@j.com");

console.log(newUser.showInfos());

/* Creating objects with the "Object.create()": */

function Admin(role) {
  /* The "call()" method is used to invoke the "User" method and pass properties to it. */
  User.call(this, "Juliana", "j@j.com");
  this.role = role || "student";
}

/* We are creating an object and pass the "prototype" property of the "User" function as a parameter. In this way, the "User" is acting as a prototype of "Admin", so, within an object created from the "Admin" constructor function, the object will be able to use the "showInfos()" method, which is a method from "User". */
Admin.prototype = Object.create(User.prototype);

const newUser2 = new Admin("admin");

console.log(newUser2.role);
console.log(newUser2.showInfos());
