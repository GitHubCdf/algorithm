let groupAnagrams = function (nums) {
  if(nums.length === 0) return null
  else if(nums.length === 1) return nums
  let obj = {}
  let result = []
  nums.forEach(value => {
    let copy = value.split('')
    copy.sort((a, b) => a.localeCompare(b))
    copy = copy.join('')
    obj[copy]
      ? obj[copy].push(value)
      : obj[copy] = [value]
  })
  for(let item in obj) {
    result.push(obj[item])
  }
  return result;
}

let nums = ['ate','ant','eat','tea','tan','bat']
let result = groupAnagrams(nums)
console.log(result);


