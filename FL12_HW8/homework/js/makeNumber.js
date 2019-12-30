function makeNumber(str){
    let newstr = str.split('');
    return newstr.map(x => !isNaN(x) ? x : '').join('');
}    

console.log(makeNumber('bkjj5hgjghghh'));
