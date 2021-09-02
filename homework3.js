// 1. Given an array. Write a recursive function that removes the 
//    first element and returns the given array. (without using 
//    arr.unshift(),assign second element to first, third element to 
//    second...)

function removeFirstElement(array, i = 0) {
	array[i] = array[i+1];

	if (i < array.length-1) {
		removeFirstElement(array, i+1);
	} else array.pop();

	return array;
}

removeFirstElement([6, 78, "n", 0, 1]);	// [78, "n", 0, 1]
removeFirstElement([5]);		// [5]
removeFirstElement([]);			// []

////////////////////////////////////////////////////////////////////////////////

// 2. Given an array of nested arrays. Write a recursive function 
//    that flattens it. (Hint create function that concats arrays).

function concatsArrays(array, result = []) {
	for (let elem of array) {
		if (Array.isArray(elem)) {
			concatsArrays(elem, result);
		} else result.push(elem);
	}

	return result;
}

concatsArrays([1, [3, 4, [1, 2]], 10]);		// [1, 3, 4, 1, 2, 10]
concatsArrays([14, [1, [[[3, []]], 1], 0]])	// [14, 1, 3, 1, 0]

////////////////////////////////////////////////////////////////////////////////

// 3. Given a number. Write a function that calculates its sum of 
//    the digits and if that sum has more than 1 digit find the sum of 
//    digits of that number. Repeat that process if needed and return 
//    the result.

function sumOfDigits(number) {
	let sum = 0;
	let strNum = String(number);

	for (let elem of strNum) {
		sum += +elem;
	}

	if (sum > 9) {
		return sumOfDigits(sum);
	}

	return sum;
}

sumOfDigits(14)			// 5
sumOfDigits(29)			// 2
sumOfDigits(999999999999)	// 9

////////////////////////////////////////////////////////////////////////////////

// 4. Given an object. Invert it (keys become values and values 
//    become keys). If there is more than key for that given value 
//    create an array.

function invertKeysAndValues(object) {
	let result = {};

	for (let key in object) {
		if (result.hasOwnProperty([object[key]])) {
			if (typeof result[object[key]] === "string") {
				let value = result[object[key]].split("");
				result[object[key]] = value;
    				value.push(key);

			} else result[object[key]].push(key);

		} else result[object[key]] = key;
	}

	return result;
}

invertKeysAndValues({a: "1", b: "2"})			// {1: "a", 2: "b"}
invertKeysAndValues({a: "1", b: "2", c: "2"})		// {1: "a", 2: ["b", "c"]}
invertKeysAndValues({a: "1", b: "2", c: "2", d: "2"})	// {1: "a", 2: ["b", "c", "d"]}

////////////////////////////////////////////////////////////////////////////////

// 5. Create a function that builds a tree like object given an array with object which contains 
//    parent and id properties.

let treeNodes = [
	{parent: null, id: 0},
	{parent: 0, id: 1},
	{parent: 0, id: 2},
	{parent: 1, id: 3},
	{parent: 1, id: 4},
	{parent: 2, id: 5},
	{parent: 4, id: 6},
];

let makeTree = (treeNodes, parentId) => {
   let parents = treeNodes.filter(node => node.parent === parentId);
   let tree = {};
   parents.forEach(parent => {
      tree[parent.id] = makeTree(treeNodes, parent.id);
   })

	return tree;
}

makeTree(treeNodes, null);
