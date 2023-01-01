import User from "./User.js";

export default class Admin extends User {
  constructor(name, email, birthDate, role = "Admin", isActive = true) {
    super(name, email, birthDate, role, isActive);
  }
}
