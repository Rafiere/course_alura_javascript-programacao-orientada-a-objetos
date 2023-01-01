export default class User {
  /* The JS uses the "#" to represent a private attribute. */

  /* All of the private attributes must be declared in the class. */
  #name;
  #email;
  #birthDate;
  #role;
  #isActive;

  constructor(name, email, birthDate, role = "student", isActive = true) {
    this.#name = name;
    this.#email = email;
    this.#birthDate = birthDate;
    this.#role = role;
    this.#isActive = isActive;
  }

  /* We're creating a "getter" function. */
  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get birthDate() {
    return this.#birthDate;
  }

  get role() {
    return this.#role;
  }

  get isActive() {
    return this.#isActive;
  }

  set name(name) {
    this.#name = name;
  }

  /* We're creating a private method. */
  #createObjUser() {
    return {
      name: this.#name,
      email: this.#email,
      birthDate: this.#birthDate,
      role: this.#role,
      isActive: this.#isActive,
    };
  }

  showInfos() {
    return `${this.name}, ${this.email}`;
  }
}

// const newUser = new User("Juliana", "j@j.com", "2021-01-01");

// console.log(newUser.showInfos());

/* Por baixo da classe "User", temos a propriedade "prototype" que foi passada, através da cadeia de protótipo, para dentro do objeto "newUser", usando a sintaxe de classes. */

/* Basicamente, o modelo de classes no JavaScript é um "syntax sugar" para o modelo de herança de protótipos, como o "bind()" e etc. */
// console.log(User.prototype.isPrototypeOf(newUser)); //true
