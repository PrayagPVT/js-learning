// let myNmae = "prayag     "

// console.log(myNmae.trueLength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",


    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prayag = function(){
    console.log(`prayag is present in all objects`);
}

Array.prototype.heyprayag = function(){
    console.log(`Prayag says hello`);
}
// heroPower.prayag()
myHeroes.prayag()
myHeroes.heyprayag()
// heroPower.heyprayag()

const user = {
    name: "prayag",
    email: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssinment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user
// yeh upar wala code me jo proto likha hai usko modern syntax aj kle time me replace krra hai 

// modersyntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "chaiaurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"prayag".trueLength()
"iceTea".trueLength()
