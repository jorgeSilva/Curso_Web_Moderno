const qual_triangulo = (l1, l2, l3) =>{
    if(l1 == l2 == l3 ) console.log('Este eh um triangulo Equilatero')
    else if (l1 == l2 || l2 == l3 || l1 == l3){
        console.log('Isoceles');
    }else{
        console.log('Escaleno');
    }
}

qual_triangulo(1,1,1)
qual_triangulo(1,3,3)
qual_triangulo(5,3,7)

