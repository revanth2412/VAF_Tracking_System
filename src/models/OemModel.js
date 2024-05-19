
export default class OemModel {
  constructor(name, email, password, OEM, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.OEM = OEM;
    this._id = id;
  }

  static getAll() {
    return users;
  }
}

var users = [];
