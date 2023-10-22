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


