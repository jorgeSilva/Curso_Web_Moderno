let isAtive = false
console.log(isAtive)

isAtive = true
console.log(isAtive)

isAtive = 0
console.log(!!isAtive)

console.log(`os vardadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!isFinite)
console.log(!!(isAtive = true))

console.log(`os falsos...`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtive = false))

console.log(`\nPra finalizar...`)
console.log(!!('' || null || ' '))

let nome = ''
console.log(nome || 'desconhecido')