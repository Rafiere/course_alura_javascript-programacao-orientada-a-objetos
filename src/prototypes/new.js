/* O comando "new" serve para criarmos instâncias através de uma função construtora. */

function User(name, email) {
  this.name = name;
  this.email = email;

  this.showInfos = function () {
    return `Name: ${this.name}, Email: ${this.email}`;
  };
}

/* Criando objetos com a palavra-chave "new": */

/* Quando criamos um objeto através do "new", que chama a função construtora, o JavaScript fará duas coisas, são elas:

1. Criará um novo objeto, ou seja, a constante "newUser" recebeu um novo objeto.

2. O JS checará, no prototype, o que deve ser encaixado na cadeia de protótipos. O que será encaixado na cadeia de protótipos serão os métodos e propriedades de "User", pois o "User" será o protótipo do objeto "newUser", que foi criado agora. 

3. O contexto do objeto "newUser" será o contexto para o "this" desse objeto. Assim, o contexto será as propriedades "name" e "email". */
const newUser = new User("Juliana", "j@j.com");

console.log(newUser.showInfos());

/* Criando objetos com o "Object.create()": */

function Admin(role) {
  /* O método "call()" serve para invocarmos o método "User" e passarmos propriedades para ele. */
  User.call(this, "Juliana", "j@j.com");
  this.role = role || "student";
}

/* Estamos criando um objeto e passando como parâmetro a propriedade "prototype" da função "User". Dessa forma, o "User" está agindo como protótipo de "Admin", assim, conseguimos, dentro de um objeto criado a partir da função construtora "Admin", o objeto conseguirá utilizar o método "showInfos()", que é um método de "User". "*/
Admin.prototype = Object.create(User.prototype);

const newUser2 = new Admin("admin");

console.log(newUser2.role);
console.log(newUser2.showInfos());
