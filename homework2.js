// 1. Write a function which receives an array and a number as arguments and returns a new array 
//    from the elements of the given array which are larger than the given number.

function getNumbersLarger(array, number) {
	let result = [];

	for (let elem of array) {
		if (elem > number) {
			result.push(elem);
		}
	}

	return result.length ? result : "Such values do not exist";
}

getNumbersLarger([10, 25, 16, -5, 30, 15, 24], 16);	// [25, 30, 24]
getNumbersLarger([1, 1, 2, -3, 0, 8, 4, 0], 9);		// "Such values do not exist"

////////////////////////////////////////////////////////////////////////////////

// 2. Write a function, which receives two numbers as arguments and finds all numbers between
//    them such that each digit of the number is even. The numbers obtained should be printed
//    in a comma-separated sequence on a single line.

function isDigitsEven(number) {
	let arrStrNum = String(number).split("");
	return arrStrNum.every(elem => !(elem % 2));
}

function getEvenDigNumbers(number1, number2) {
	let result = "";

	for (let i = number1; i <= number2; i++) {
		if (isDigitsEven(i)) {
			result += `${i}, `;
		}
	}

	return result.length ? result.slice(0, -2) : "Such numbers does not exist"
}

getEvenDigNumbers(19, 42);	// "20, 22, 24, 26, 28, 40, 42"
getEvenDigNumbers(99, 199);	// "Such numbers does not exist"

////////////////////////////////////////////////////////////////////////////////

// 3. Write a recursive function to determine whether all digits of the number are odd or not.

function isDigitsOdd(number, i = 0) {
	if (i === String(number).length) {
		return true;
	}

	if (String(number).split("")[i] % 2) {
		return isDigitsOdd(number, i+1);
	} 	else return false;
}

isDigitsOdd(4211133);	// false
isDigitsOdd(7791);		// true
isDigitsOdd(5);			// true

////////////////////////////////////////////////////////////////////////////////

// 4. Given an array of numbers. Write a recursive function to find its minimal positive element.
//    (if such element does not exist, return -1).

function getMinPositiveElem(array, i = 0, minElem = array[0]) {
	if (array[i] >= 0) {
		if (array[i] < minElem) {
			minElem = array[i];
		}
	}

	while (i < array.length) {
		return getMinPositiveElem(array, i+1, minElem);
	}
	
	return minElem >= 0 ? minElem : -1;
}

getMinPositiveElem([56, -9, 87, -23, 0, -105, 55, 1]);	// 0
getMinPositiveElem([45, -9, 15, 5, -78]);				// 5
getMinPositiveElem([-5, -9, -111, -1000, -7]);				// -1

////////////////////////////////////////////////////////////////////////////////

// 5. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting
//    order is violated.

function getViolatedindex(array, i = 0) {
	while (i < array.length-1) {
		if (array[i] <= array[i+1]) {
			return getViolatedindex(array, i+1);
		}
		return i+1;
	}
	
	return -1;
}

getViolatedindex([2, 12, 15, 48, 64]); 		// -1
getViolatedindex([-9, -4, -4, 3, 12, 4, 5]);	// 5

