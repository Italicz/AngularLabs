export class User {
    username: string;
    age: number;
    email: string;
    password: string;
    valid: boolean;
    constructor(username:string='', age:number=0, email:string='', password:string='', valid=false){
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}