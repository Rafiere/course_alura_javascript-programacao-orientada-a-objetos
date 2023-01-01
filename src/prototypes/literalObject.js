const user = {
  name: "Juliana",
  email: "j@j.com",
  birthDate: "2021/01/01",
  role: "admin",
  isActive: true,

  showInfos: function () {
    console.log(this.name);
  },
};

/* Every time we assign a function to a variable, the function loses its context. If we do the "const show = user.showInfos", the function will lose the connection with the "show" object. Thus, "this" will return "undefined", as it will no longer be connected with the "user" object. */

user.showInfos();

/* The keyword "this" means the context that is attached to that keyword. */

/* When we assign a function to a variable, we do not create a reference to the original function, but we make a copy of it, so they are different functions and do not interfere with each other. */
const showUserInfos = user.showInfos.bind(user);

showUserInfos();
