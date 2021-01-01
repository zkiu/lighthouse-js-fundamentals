var str = 'Give @10'
var patt1 = /\W/g
var patt2 = /[^a-z0-9\s]/gi

let result = patt2.test(str)

console.log(result)
