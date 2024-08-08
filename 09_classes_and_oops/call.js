// function SetUsername(username){
//     this.username = username
// }

// function createUser(username, email, password){
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@gmail.com","123")
// console.log(chai);
// line number 6 me bina .call aur this likhenge toh SetUsername call hoga par executr nhi hoga 
// output
// createUser { email: 'chai@gmail.com', password: '123' }


function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com","123")

// this aur call ilkhne ke baad output 
// createUser {
//     username: 'chai',
//     email: 'chai@gmail.com',
//     password: '123'
//   }