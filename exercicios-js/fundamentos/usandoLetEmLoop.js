/* for(let i = 20; i > 0; i--){
    console.log(i)
}
 */
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()