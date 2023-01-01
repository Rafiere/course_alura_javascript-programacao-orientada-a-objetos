const user = {
  name: "Juliana",
  email: "j@j.com",
  birthDate: "2021/01/01",
  role: "student",
  isActive: true,

  showInfos: function () {
    console.log(this.name);
  },
};

const admin = {
  name: "Mariana",
  email: "m@m.com",
  birthDate: "2020/05/01",
  role: "admin",
  isActive: true,

  createCourse() {
    console.log("The course was created.");
  },
};

/* Esse método serve para definir um protótipo. O primeiro objeto é o que vai herdar propriedades, e o segundo objeto é o que vai fornecer essas propriedades para serem herdadas. */
Object.setPrototypeOf(admin, user);

/* O "admin" herdou o método "showInfos" do "user". */
admin.createCourse();
admin.showInfos();
