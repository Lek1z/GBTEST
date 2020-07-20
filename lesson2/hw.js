// 6

function sum (arg1, arg2) {
  return arg1 + arg2
}

function mathOpertaion (arg1, arg2, operation) {
  // + - / *
  switch (operation) {
    case '+':
      return sum(arg1, arg2)
      break
    case '-':
      return arg1 - arg2
  }
}

const result = mathOpertaion(5,6,'+')
console.log(result)
