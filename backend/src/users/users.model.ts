export class Users {
    id: string;
    username: string;
    email: string;
    role: string;
    password: string;
  
    constructor(id: string, username: string, email: string, role: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
    this.password = password;
    }
  }
  
  export interface IUser {
    id: string;
    username: string;
    email: string;
    role: string;
    password: string;
  }