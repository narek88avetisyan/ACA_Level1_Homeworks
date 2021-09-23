// 1. Write a JavaScript function to get all possible subsets of given length 
//    of the given array. Assume that all elements in the array are unique.

function getAllSubsets(arr, n, result = []) {
   let tempArr = arr.slice();

   function subsets() {
   	for (i = n-1; i < tempArr.length; i++) {
	      let minArr = [].concat(tempArr.slice(0, n-1), tempArr[i]);
	      result.push(minArr);
	   }
   }

	subsets();

	if (n > 2) {
		while (tempArr.length > n) {
			tempArr.splice(1, 1);
			subsets();
		}
	}

	if (arr.length > n) {
		arr.splice(0, 1);
		getAllSubsets(arr, n, result);
	}

   return result;
}

getAllSubsets([1, 2, 3, 4, 5, 6], 3)	// [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 2, 6], [1, 3, 4]
					// [1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], [1, 5, 6], 
					// [2, 3, 4], [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6], 
					// [2, 5, 6], [3, 4, 5], [3, 4, 6], [3, 5, 6], [4, 5, 6]]
