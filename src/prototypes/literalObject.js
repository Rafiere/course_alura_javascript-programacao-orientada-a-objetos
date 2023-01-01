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

/* Todas as vezes que atribuímos uma função em uma variável, a função perde o seu contexto. Se fizermos o "const show = user.showInfos", a função perderá a conexão com o objeto "show". Assim, o "this" retornará "undefined", pois ele não estará mais conectado com o objeto "user". */

/* A palavra-chave "this" significa o contexto que está atrelado à essa palavra. */

user.showInfos();

/* O método "bind" serve para prendermos a execução de uma função a um contexto específico, dessa forma, atrelaremos o contexto da constante "showUserInfos" ao objeto "user", e, assim, o "this" estará referenciado ao objeto "user". */

/* Quando atribuímos uma função à uma variável, não criamos uma referência para a função original, e sim realizamos uma cópia dela, assim, elas são funções diferentes e não interferem uma na outra. */
const showUserInfos = user.showInfos.bind(user);

showUserInfos();
