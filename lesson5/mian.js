// 123
/*
const obj = {
  u: 3,
  d: 2,
  h: 1,
}

{}
*/

// function numToObj (n) {
//   const obj = {}

//   if (n >= 0 && n <= 999) {
//     const splitter = []

//     for (let i = 1; i <= 3; i++) {
//       splitter.push(n % 10)
//       n = Math.trunc(n / 10)
//     }

//     // [3,2,1]
//     [obj.u, obj.id, obj.h] = splitter
//   }

//   return obj
// }

// const result = numToObj(123)
// console.log(result)


// let [firstName, , secondName] = 'Dima Vladimirovich Zaytsev'.split(' ')

// function numToObj (n) {
//   const obj = {}
//   if (n >= 0 && n <= 999) {
//     [obj.u, obj.id, obj.h] = `${n}`.split('').reverse() // '123' -> ['1','2','3'] -> ['3', '2', '1']
//   }
// }

// numToObj(123)


const obj = {
  goodsCount: 100,
  arrayOfGoods: [{}, {}, {}],
  qwe: 123,
},

function doSomething (obj) {
//  const { goodsCount, qwe } = obj
 const goodsCount = obj.goodsCount
 const qwe = obj.qwe

 console.log(goodsCount) // 100
}

doSomething(obj)
