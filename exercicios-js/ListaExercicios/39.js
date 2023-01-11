valorVetores = (array1 = [2, 4, 5, 8], array2 = [3, 6, 7, 9]) => {
    for(let i = 0; i < array1.length; i++){
        array1[i] = array1[i] + array2[i]
        array2[i] = array1[i] - array2[i]
        array1[i] = array1[i] - array2[i]
    }

    console.log('Novo vetor A: ' + array1)
    console.log('Novo vetor B: ' + array2)
}

valorVetores()