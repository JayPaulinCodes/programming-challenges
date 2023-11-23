/**
 * Making use of the Object.values() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values] 
 * method and the Array.reduce() [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce] 
 * method we can get an array of the stolen item's values and then get the sum 
 */
function calculateLosses(obj) {
    const totalLosses = Object.values(obj).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return totalLosses === 0 ? "Lucky you!" : totalLosses;
}


// Solution testing
const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
} 
  
const stolenItems2 = {
    painting: 20000,
}
  
const stolenItems3 = {}

console.log(calculateLosses(stolenItems1)); // Expected: 100    Result: 100
console.log(calculateLosses(stolenItems2)); // Expected: 20000    Result: 20000
console.log(calculateLosses(stolenItems3)); // Expected: "Lucky you!"    Result: "Lucky you!"