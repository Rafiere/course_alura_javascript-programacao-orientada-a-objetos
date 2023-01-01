const user = {
  /* The "init" is a form of a "constructor" for an object literal. */
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },

  showInfos: function (name) {
    return this.name;
  },
};

/* We are passing "user" as a prototype to "newUser", however, we are not relying on a constructor function for this, we are using an object literal. */
const newUser = Object.create(user);

console.log(newUser.showInfos());
console.log(user.isPrototypeOf(newUser)); //true, because "user" is a prototype for "newUser".

/* The "Object.create()" makes more sense using prototypes, while "constructor" makes more sense in the class model. */
