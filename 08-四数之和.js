function fourSum(nums, target) {
  if(nums.length < 4) return []
  let result = []
  nums.sort((a,b) => a-b)
  if(nums[0] > target ) return null //最小数 大于target 则和一定大于 target
  let l = 0
  let r = nums.length - 1
  let ml,mr //中间指针
  let sum = 0
  while(l < r && r - l >= 2 )  {
    console.log(l,r)
    if(l > 0 && nums[l] == nums[l-1]){
      l++
      continue
    }
    if(r < nums.length-1 && nums[r] == nums[r+1]){
      r--
      continue //去重
    }
    ml = l + 1
    mr = r - 1
    console.log(l,ml,mr,r)
    while(ml < mr ) {
      if(ml > l+1 && nums[ml] == nums[ml-1]){
        ml++
        continue
      } 
      if(mr < r-1 && nums[mr] == nums[mr+1]) {
        mr--
        continue //去重
      }
      sum =  nums[l] + nums[ml] + nums[mr] + nums[r]
      if(sum == target ) {
        result.push([nums[l], nums[ml], nums[mr], nums[r]])
        ml++
        mr--
      }
      else if(sum < target) {
        ml++
      }
      else {
        mr--
      }
    }
    if(sum < target) {
      l++
    } else {
      r--
    }
  } 
  return result
}

let nums = [0,0,0,0,0,0,0]
let result = fourSum(nums, 0)
console.log(result)