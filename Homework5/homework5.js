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
