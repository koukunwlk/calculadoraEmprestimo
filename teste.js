let principal = 1000
let interest = 20 / 100 / 12
let payments = 3 * 12

let x = Math.pow(1 + interest,payments)
let monthly = (principal * x * interest) / (x - 1)

console.log(x, monthly)