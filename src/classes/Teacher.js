import User from "./User.js";

export default class Teacher extends User {
  constructor(name, email, birthDate, role = "Teacher", isActive = true) {
    super(name, email, birthDate, role, isActive);
  }

  approveStudent() {
    console.log("The student was approved.");
  }
}
