// - Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
// - Create an app which removes duplicates from an array 
// Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
// Result should be: ["John","Mary","Alex","Steve"] 
// - Create an app whichs returns true/false depending on if the item is in the array 
// - Create an app which finds the largest number in an array 
// - Create an app which finds the smalest number in an array 
// - Create FizzBuzz app 
// - Create an app which determines whether the number is even or odd. 
// - Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 

// -------------------------------------------------------


// - Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
const checkIfPalindrome = (word) => {
    let lowerWord = word.toLowerCase()
    let reverseWord = ""
    for (let i = lowerWord.length -1; i >= 0; i--) {
        reverseWord += lowerWord[i]
    }
    if (lowerWord == reverseWord) {
        return true
    } else {
        return false
    }
}
//checkIfPalindrome("Mom")


// - Create an app which removes duplicates from an array 
// Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
// Result should be: ["John","Mary","Alex","Steve"] 

const removeDupes = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let r = 0; r < i; r++) {
            if (array[i] === array[r]) {
                array.splice(i)
                break
            }
        }
    }
    return array
}

// let sampleArray = ["John","Mary", "Alex", "Steve", "Mary", "John"]
// removeDupes(sampleArray)


// - Create an app whichs returns true/false depending on if the item is in the array 

const checkIfInArray = (item, array) => {
    let inArray = false
    for(let i = 0; i < array.length; i++) {
        if (item===array[i]) {
            inArray = true
        }
    }
    return inArray
}

// let sampleArray = ["John","Mary", "Alex", "Steve", "Mary", "John"]
// checkIfInArray("John", sampleArray)


// - Create an app which finds the largest number in an array 
const findMaxNum = (array) => {
    let maxNum = 0
    for (let i=0; i<array.length; i++) {
        if(array[i] > maxNum) {
            maxNum = array[i]
        }
    }
    return maxNum
}

// let sampleArray = [4,3,6,7,6,3,9,8,3]
// findMaxNum(sampleArray)


// - Create an app which finds the smalest number in an array 
const findMinNum = (array) => {
    let minNum = Infinity
    for (let i=0; i<array.length; i++) {
        if(array[i] < minNum) {
            minNum = array[i]
        }
    }
    return minNum
}

 // let sampleArray = [4,3,6,7,6,3,9,8,3]
 // findMinNum(sampleArray)


 // - Create FizzBuzz app 
const fizzBuzz = (number) => {
    if (number % 3 == 0 && number % 5 == 0) {
        return 'FIZZBUZZ'
    } else if (number % 3 == 0) {
        return 'FIZZ'
    } else if (number % 5 == 0) {
        return 'BUZZ'
    }
}

//fizzBuzz(15)


// - Create an app which determines whether the number is even or odd. 
const evenOrOdd = (number) => {
    if(number%2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

//evenOrOdd(4)


// - Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 
const sortUpAndDown = (array) => {
    let sortAsc = []
    let sortDesc = []
    let diminishingArray = array
    while (diminishingArray.length > 0) {
        let maxNum = 0
        let maxI = 0
        for (let i=0; i<diminishingArray.length; i++) {
            if(diminishingArray[i] > maxNum) {
                maxNum = diminishingArray[i]
                maxI = i
            }
        }
        sortDesc.push(maxNum)
        sortAsc.unshift(maxNum)
        diminishingArray.splice(maxI,1)

    }
    return [sortDesc, sortAsc]
}

//let sampleArray = [3,4,56,7,8,1]