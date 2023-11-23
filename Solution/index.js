function findIt(obj, name) {
	
}

// Solution Testing
const stolenItems1 = {
    tv: 30,
    timmy: 20,
    stereo: 50,
}

const stolenItems2 = {
    tv: 30,
    stereo: 50,
}

const stolenItems3 = {}

console.log(findIt(stolenItems1, "timmy")); // Expected: "Timmy is gone..."     Result: 
console.log(findIt(stolenItems2, "timmy")); // Expected: "Timmy is here!"     Result: 
console.log(findIt(stolenItems3, "timmy")); // Expected: "Timmy is here!"     Result: 