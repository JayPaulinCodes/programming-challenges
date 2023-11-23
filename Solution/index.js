function thirdMostExpensive(obj) {
	const sortedItems = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return sortedItems.length < 3 ? false : sortedItems[2][0];
}

// Solution Testing
console.log(thirdMostExpensive({})); // Expected: false 

console.log(thirdMostExpensive({ piano: 100, tv: 200 })); // Expected: false

console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }));  // Expected: "stereo"

console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, })); // Expected: "mirror"