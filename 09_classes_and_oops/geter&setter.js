class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}   

const Prayag = new User("prayag@gamil.com","abc")
console.log(Prayag)
//output
// User { _email: 'prayag@gamil.com', _password: 'abc' }

console.log(Prayag.email);
//output
// PRAYAG@GAMIL.COM

console.log(Prayag.password);
//output
//  ABC