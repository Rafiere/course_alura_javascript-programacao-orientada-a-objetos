import User from "./User.js";
import Admin from "./Admin.js";

const newUser = new User("Mariana", "m@m.com", "2021-01-01");
console.log(newUser.showInfos());

// newUser.#name = "test"; //It will return an error.

const newAdmin = new Admin("MarianaADM", "mADM@m.com", "2021-01-01");

/* When we use a "get" method, we don't use "()", but call it as if it were a property. */
console.log(newAdmin.name);

/* The "setter" method is called using the "=" signal and the common name of the property (without the "#" char). */
newUser.name = "André";
console.log(newUser.name);
