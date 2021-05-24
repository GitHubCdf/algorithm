function threeNumCloset(nums, target) {
  if (nums.length < 3) return null
  else if (nums.length == 3) return nums
  nums.sort((a, b) => a - b)
  let i = 0
  let sum = 0
  let result = null
  if (nums[0] > target) {
    result.push([nusm[0], nums[1], nums[2]])
  } else if (nums[nums.length] < target) {
    result.push([nums[i - 1], nums[i - 2], nums[i - 3]])
  } else {
    i = 0
    while (i < nums.length-3) {
      sum = nums[i] + nums[i+1] + nums[i+2]
      if (nums[i] < target && sum < 0) {
        i++
      } else {
        break
      }
    }
    result = [ nums[i],nums[i+1],nums[i+2] ]
  }

  return result
}

let nums = [-1, 2, 1, 2,3,4,0]

let result = threeNumCloset(nums, 1)
console.log(result)