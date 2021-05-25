let map = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z']
}


let concat = function(arr1,arr2) {
  let result = []
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      result.push(arr1[i]+arr2[j]);
    }
  }
  return result
}

let letterCombinations = function(digits) {
  if(digits.length == 0) return []
  let result = []
  result.push(...map[digits[0]])
  let i = 1;
  while(i < digits.length) {
    result = concat(result,map[digits[i]])
    i++
  }
  return result
} 

let digits = '239'
let result = letterCombinations(digits)
console.log(result)