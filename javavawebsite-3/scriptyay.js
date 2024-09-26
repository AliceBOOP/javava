var client = {
    firstName: "Mark",
    secondName: "Smith",
    age: "31",
    email: "smithmark31@mail.com"
};

console.log(client);

console.log("First and last name: ", client.firstName, client.secondName);

client.phoneNumber = "8 (999) 000 12 45";

console.log(client);

const someObject = {};
someObject.someKey = "SomeValue";

const someObject2 = new Object();


function Car(brand, model, modification, releaseYear, Color){
    this.brandName = brand;
    this.modelName = model;
    this.mods = modification;
    this.year = releaseYear;
    this.paintColor = Color;
}

var newCar = new Car("kIA", "Sport Age","None", "1999", "Grey");

console.log(newCar);

for (let key in newCar){
    console.log(key + ":", newCar[key]);
}

function Cat(breed, eyeColor, size, name){
    this.breedName = breed;
    this.eye = eyeColor;
    this.sizesize = size;
    this.catName = name;
    this.describe = function(){
        return "Breed: " + breed + "eyeColor: " + eyeColor + "size: " + size + "name: " + name; 
    }
    this.jump = function() {
        console.log(name, "has jumped:")
    }
}

var newCat = new Cat("none", "green", "6 kg", "Murmuzet");

console.log(newCat);

newCat.jump();

console.log(newCat.describe());

function add(a,b){
    return a + b;
}

console.log(add(5,5));

function greet(name="Friend"){
    console.log("Hello", name + "!")
}

greet("Mark");

greet();




function A(callback){
    let msg = "A";
    msg += callback();
    return msg;
}

function B(){
    return "B";
}

console.log(A(B));

function greeting(name, callback){
    const gretting = "Hello " + name + "!";
    callback(gretting);
}

function printMsg(msg){
    console.log("Message: ", msg)
}

greeting("Bob", printMsg);

const hello = () => "Hey you!";

function howdy (){
    return "Hey, you!";
}

console.log(hello());

console.log(howdy());

const square1 = (x) => x * x;
console.log(square1(5));

function square2(x){
    return x * x;
}

console.log(square2(2));

const addAndLog = (a,b) =>{
    const result = a + b;
    console.log(result);
    return result;
}

console.log(addAndLog(2,4))