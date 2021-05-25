let isValid = function (s) {
  let stack = [] //模拟栈
  let result = false
  let str = ''
  for (let i = 0; i < s.length; i++) {
    
    if (s[i] === ')') str = '('
    else if (s[i] === ']') str = '['
    else if (s[i] === '}') str = '{'
    else {
      stack.push(s[i])      
      continue
    }
    console.log(stack)
    if (str === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  stack.length === 0 ? result = true : result = false
  return result
}

let s = "{}{([[[][][]]][][])}"
let result = isValid(s)

console.log(result);