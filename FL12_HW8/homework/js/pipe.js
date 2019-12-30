function addOne(x) {
    return x + 1;
}

function pipe(arg, ...fns){
    return fns.reduce((v, f) => f(v), arg);
} 

console.log(pipe(1, addOne,addOne,addOne));