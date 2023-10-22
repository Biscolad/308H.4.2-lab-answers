//Easy Going
for (let i=0; i<=20; i++) {
    console.log(i);
}

//Get Even
for (let i=2; i<=200; i+=2) {
    console.log(i)
}

//Fizz Buzz
const numbLog = [];
for (let i=1; i<=100; i++) 
if (i%3===0 && i%5===0) {
    numbLog.push("Fizzbuzz")
}
else if (i%3 === 0) {
    numbLog.push("Fizz") 
    }
else if (i%5 === 0) {
    numbLog.push("Buzz")
    }
else {
    numbLog.push(i)
}
console.log(numbLog)

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Q1
plantee[2] ++;
console.log(plantee);

//Q2
wolfy[3] = "Gotham City";
console.log(wolfy);

//Q3
dart.push("Hawkins");
console.log(dart);

//Q4
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);


//Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let i = 0; i<ninjaTurtles.length; i++)
for (i of ninjaTurtles) {
    console.log(i.toUpperCase());
}