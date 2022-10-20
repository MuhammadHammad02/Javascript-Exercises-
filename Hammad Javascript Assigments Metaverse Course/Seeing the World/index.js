// Seeing the World: Think of at least five places in the world you’d like to visit.

var locations = ["Islamabad", "Cappadocia", "Venice", "Paris", "London"];

// print its original order
console.log("Original order:");

console.log(locations);


// Alphabetical order without modifying actual list.

console.log("\nAlphabetical order:");

var famousCity = locations;

console.log([...famousCity].sort());

//array still original form

console.log("\nOriginal form:");

console.log(locations);

// reverse order without modifying actual list

console.log("\nReverse order:");
var famousCity1 = locations;

console.log([...famousCity].reverse());

// array still original form

console.log("\nOrigional form:");

console.log(locations);

// reverse the order of list

console.log("\nReverse order:");

console.log(locations.reverse());

//reverse again for its original form;

console.log("\nOriginal order:");

console.log(locations.reverse());

// sort it alphanetical order

console.log("\nSort alphabetical order:");

console.log(locations.sort());

//sort to change stored in reverse alphabetical ondragover.

console.log("\nReverse Alphabetical order:");

console.log(locations.sort().reverse());