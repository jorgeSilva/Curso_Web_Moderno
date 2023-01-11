numerosPares = () =>{
    let nums = []

    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            nums.push(i)
        }
    }

    console.log(nums);
}

numerosPares()