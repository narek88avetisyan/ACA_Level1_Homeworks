// 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the 
//    count of particular element divided by the count of all elements)

function getUnique(array) {
   let result = [];

   for (let i = 0; i < array.length; i++) {
      let isIncluded = false;

      for (let j = 0; j < result.length; j++) {
         if (array[i] === result[j]) {
            isIncluded = true;
            break;
         }
      }

      if (!isIncluded) {
         result.push(array[i]);
      }
   }

   return result;
}

function getCountSimilarElem(array, elem) {
	let count = 0;

	for (let i = 0; i < array.length; i++) {
 		if (elem === array[i]) {
 			count++;
 		}
	}
	
	return count;
}

function getFrequensy(array) {
	let uniqArr = getUnique(array);
	let frequensy = {};

	for (let i = 0; i < uniqArr.length; i++) {
		let countInArray = getCountSimilarElem(array, uniqArr[i]);
		frequensy[uniqArr[i]] = countInArray / array.length;
	}

	return frequensy;
}

getFrequensy([1, 1, 2, 2, 3]);		// {1: 0.4, 2: 0.4, 3: 0.2}
getFrequensy([4, 4]);			// {4: 1}
getFrequensy([1, 2, 3]);		// {1: 0.3333333333333333, 2: 0.3333333333333333, 3: 0.3333333333333333}

////////////////////////////////////////////////////////////////////////////////

// 2. Write a function that accepts a string(a sentence) as a parameter and finds the longest 
//    word within the string If there are several words which are the longest ones, print the 
//    last word(words can be separated by space, comma or hyphen).

function delLastCharacter(string) {
	let word = string.split("");
	word.splice(-1, 1);
	return word.join("");
}

function findTheLongestWord(string) {
	let words = string.split(" ");
	let longWord = "";

	for (let word of words) {
		if (
			word[word.length-1] == "," 
			|| word[word.length-1] == "." 
			|| word[word.length-1] == "!"
			|| word[word.length-1] == "?"
		) {
			word = delLastCharacter(word);
		}

		if (word.length >= longWord.length) {	
			longWord = word;
		}
	}
	
	return longWord;
}

findTheLongestWord("A revolution without dancing is a revolution not worth having.");		// "revolution"
findTheLongestWord("Which would be worse - to live as a monster, or to die as a good man?");	// "monster"

////////////////////////////////////////////////////////////////////////////////

// 3. Write a function to find longest substring in a given a string without repeating characters 
//    except space character. 
//    If there are several, return the last one. Consider that all letters are lowercase.

function findTheLongestWord(string) {
	let longest = "";
	let tempSub = "";
	let char;
	let ind;

	for (let i = 0; i < string.length; i++) {
		char = string.charAt(i);
		ind = tempSub.indexOf(char);

		if (ind !== -1) {
			if (tempSub.length >= longest.length) {
				longest = tempSub;
			}

			if (char !== " ") {
				tempSub = tempSub.substr(ind + 1);
			}	
		}
		
		tempSub += char;
	}

	return longest;
}

findTheLongestWord("there are no two words in the english language more harmful than 'good job'.");	// "rmful than "go"
findTheLongestWord("parting your soup is not a miracle, bruce.");					// "up is not a m"

////////////////////////////////////////////////////////////////////////////////

// 4. Write a function to compute a new string from the given one by moving the first char to 
//    come after the next two chars, so "abc" yields "bca". Repeat this process for each 
//    subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

let string5 = "dfgjkloyp";	// "fgdkljypo"
let string6 = "aweyoolp";  	// "weaooylp"

function convertToArray(string) {
	return string.split("");
}

function pushInArrayEveryThree(array) {
	let result = [];
	let smArr = [];
	while (array.length >= 3) {
		smArr = array.splice(0, 3);
		result.push(smArr);
	}
	smArr = array.slice(0);
	result.push(smArr);
	return result;
}

function firstToLast(array) {
	for (let elem of array) {
		if (elem.length === 3) {
			elem.push(elem.shift());
		}
	}
	return array;
}

function convertToString(array) {
	let result = "";
	for (let elem of array) {
		for (let i = 0; i < elem.length; i++) {
			result += elem[i];
		}
	}
	return result;
}

// let strToArray = convertToArray(string5);
// let getEvery3 = pushInArrayEveryThree(strToArray);
// let ftToLt = firstToLast(getEvery3);
// let result = convertToString(ftToLt);
// console.log(result);
convertToString(firstToLast(pushInArrayEveryThree(convertToArray(string5))));

////////////////////////////////////////////////////////////////////////////////

// 5. Write a JavaScript function to get all possible subsets of length 3 of the given array.
//    Assume that all elements in the array are unique.

let array4 = [4];  				// [4]
let array5 = [19, 6]				// [19, 6]
let array6 = [5, 9, 23, 0, -2, -1];		// [[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1], 
						// [5, 23, 0], [5, 23, -2], [5, 23, -1], [5, 0, -2], 
						// [5, 0, -1], [5, -2, -1], [9, 23, 0], [9, 23, -2], 
						// [9, 23, -1], [9, 0, -2], [9, 0, -1], [9, -2, -1], 
						// [23, 0, -2], [23, 0, -1], [23, -2, -1], [0, -2, -1]]


function getAllPossibleSubsetsLength3(array) {
	let result = [];
	let temp;

	if (array.length > 3) {
		for (let i = 0; i < array.length; i++) {
			for (let j = i+1; j < array.length; j++) {
				for (let k = j+1; k < array.length; k++) {
					temp = [];
					temp.push(array[i], array[j], array[k]);
					result.push(temp);
				}
			}
		}
	} else return array;

	return result;
}

getAllPossibleSubsetsLength3(array4);
