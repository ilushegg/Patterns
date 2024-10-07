export class Auth {
  token;

  constructor(token) {
    if (typeof Auth.instance === 'object') {
      return Auth.instance;
    }
    this.token = token
    Auth.instance = this;
    return this;
  }

  getToken() {
    return this.token;
  }
}



let auth = new Auth('1');
let auth_2 = new Auth('2');

console.log(auth)
console.log(auth_2)