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


//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
console.log(favMovies);

//Q1
favMovies.sort();
console.log(favMovies); //Q2 The sort method re-arranged the movies alphabetically and permanently because I didn't make a copy of the original array.

//Q3
favMovies.pop();
console.log(favMovies);

//Q4
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//Q5
favMovies.reverse();
console.log(favMovies);

//Q6
favMovies.shift();
console.log(favMovies);

//Q7 - unshift added the elements to the front of the array
favMovies.unshift("Fine Wine");
console.log(favMovies);

//Q8
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15, 1, "Avatar");
console.log(favMovies);

//Q9 Yes, this permanently altered our array as Django Unchained was replaced with Avatar

//Q10
console.log(favMovies.length);
let mid = favMovies[Math.floor((favMovies.length -1) / 2)]
console.log(mid);
console.log(favMovies.indexOf("Imitation of Life"));

console.log(favMovies.slice(9, 19));
console.log(favMovies); //Q11The original array was not altered with slice
 
//Q12
let MidMovies = favMovies.slice(9, 19);
console.log(MidMovies);

//Q13
//Original array was not altered

//Q14
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious")); //We got the index of the element from the original array

//We were able to use 'const' instead of 'let' because even though the array cannot be re-assigned but the content of the array can be changed.
