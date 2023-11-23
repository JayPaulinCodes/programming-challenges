function mostExpensiveItem(obj) {
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}


// Solution Testing
const stolenItems1 = {
    piano: 2000,
}

const stolenItems2 = {
    tv: 30,
    skate: 20,
}

const stolenItems3 = {
    tv: 30,
    skate: 20,
    stereo: 50,
}

console.log(mostExpensiveItem(stolenItems1)); // Expected: "piano"      Result: "piano"
console.log(mostExpensiveItem(stolenItems2)); // Expected: "tv"      Result: "tv"
console.log(mostExpensiveItem(stolenItems3)); // Expected: "stereo"      Result: "stereo"
