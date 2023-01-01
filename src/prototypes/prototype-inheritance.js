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

/* This method serves to define a prototype. The first object is what will inherit properties, and the second object is what will provide those properties to be inherited. */
Object.setPrototypeOf(admin, user);

/* The "admin" inherited method "showInfos()" from "user". */
admin.createCourse();
admin.showInfos();
