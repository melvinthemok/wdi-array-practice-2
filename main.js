// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

function removeArrayElement (array, element) {
  array.splice(array.indexOf(element), 1)
  return array
}

// helper.test(removeArrayElement([2, 5, 9, 6], 5), [2, 9, 6])
// helper.test(removeArrayElement([10, 2, 300, 42, 56], 300), [10, 2, 42, 56])
// helper.test(removeArrayElement([73, 471, 26, 0, 13], 0), [73, 471, 26, 13])

function nthlargest (array, nth) {
  function compare (a, b) {
    return b - a
  }
  var sorted = array.sort(compare)
  return Number(array.splice(nth - 1, 1))
}

// helper.test(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4), 89)
// helper.test(nthlargest([7000, 96, 2, 460], 1), 7000)
// helper.test(nthlargest([59, 27, 9, 2390, 0], 5), 0)

function randomItem (array) {
  var random = Math.floor(Math.random() * array.length)
  return String(array.splice(random, 1))
}

function arrayRange (start, total, step) {
  var array = [start]
  for (var i = 1; i < total; i++) {
    array.push(array[i - 1] + step)
  }
  return array
}

// helper.test(arrayRange(1, 4, 1), [1, 2, 3, 4])
// helper.test(arrayRange(-6, 5, 2), [-6, -4, -2, 0, 2])
// helper.test(arrayRange(-10, 7, 5), [-10, -5, 0, 5, 10, 15, 20])
