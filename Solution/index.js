function convertToNumber(obj) {
	return Object.fromEntries(Object.entries(obj).map(value => [value[0], +value[1]]));
}

// Solution Testing
console.log(convertToNumber({ piano: "200" })); // Expected: { piano: 200 }

console.log(convertToNumber({ piano: "200", tv: "300" })); // Expected: { piano: 200, tv: 300 }

console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); // Expected: { piano: 200, tv: 300, stereo: 400 }