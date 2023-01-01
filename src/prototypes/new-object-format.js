const user = {
  /* O "init" é uma forma de "construtor" para um objeto literal. */
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },

  showInfos: function (name) {
    return this.name;
  },
};

/* Estamos passando o "user" como protótipo para o "newUser", porém, não estamos dependendo de uma função construtora para isso, e sim, estamos usando um objeto literal. */
const newUser = Object.create(user);

console.log(newUser.showInfos());
console.log(user.isPrototypeOf(newUser)); //true, pois o "user" é um protótipo para o "newUser".

/* O "Object.create()" faz mais sentido utilizando os protótipos, enquanto que o "constructor" faz mais sentido no modelo de classes. */
