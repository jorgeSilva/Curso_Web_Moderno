/* const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[5]()
 */
const otherFuncs = []/* 
console.log(otherFuncs.length) */

otherFuncs.push(1,2,3,4,{id:3}, 8)
/* console.log(otherFuncs.length) */

console.log('--------------------------------')
for(let i = 0; i < otherFuncs.length; i++){
    console.log(otherFuncs[i])
}

console.log('--------------------------------')
for(let i = 0; i < otherFuncs.length; i++){
    delete otherFuncs[i]
    console.log(otherFuncs)
} 
