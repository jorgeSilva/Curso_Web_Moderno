function compras(t1, t2){
    const compSorvete = t1 || t2
    const compTv50 = t1 && t2
/*     const compTv32 = !!(t1 ^ t2)*/
    const compTv32 = t1 != t2
    const manterSaudavel = !compSorvete

    return {compSorvete, compTv50, compTv32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));


