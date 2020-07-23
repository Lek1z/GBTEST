// homework 1

let i = 0;
while (i <= 100) {
  // опеределить является ли чсло i простым
  let j = 2;
  while (j < i) {
    if (i % j === 0) {
      break;
    }
    j++
  }

  if (i === j) {
    console.log(i)
  }
  i++;
}

homedwork 2

for (let i = -999; i <= 9; console.log(i++)) {
  for (let j = 0; j < 100; j++) {

  }
}


const arr = [1, 2, 3, 4, 5, 3];

const result = arr.reduce(function (accum, currentValue, index, arr) {
  const id = arr.indexOf(currentValue) // 2
  if (id === index) {
    return accum + currentValue
  }
  return accum
}, 0)

// console.log(result) // 15
