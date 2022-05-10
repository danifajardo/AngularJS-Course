var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array: ", numberArray);

var filterNumerArray = numberArray.filter(function (currentVal) {
   return currentVal > 5; 
});

console.log("Filtered Number Array. ", filterNumerArray);