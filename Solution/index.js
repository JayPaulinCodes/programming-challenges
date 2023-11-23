function addName(obj, name, value) {
	obj[name] = value
    return obj;
}

// Solution Testing
console.log(addName({}, "Brutus", 300)); // Expected: { Brutus: 300 }     Result: See output.txt

console.log(addName({ piano: 500 }, "Brutus", 400)); // Expected: { piano: 500, Brutus: 400 }     Result: See output.txt

console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // Expected: { piano: 500, stereo: 300, Caligula: 440 }     Result: See output.txt