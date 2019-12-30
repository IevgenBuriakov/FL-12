function makeNumber(str){
    let newstr = str.split('');
    return newstr.map(x => !isNaN(x)? x:'').join('');
}    
function countNumbers(str){
    let num = makeNumber(str).split('');
   return num.reduce(function(allNum, currNum) {
        allNum[currNum] = ( allNum[currNum] || 0) + 1;
         return allNum;
},{});
}
console.log(countNumbers('bkjj5hg35264758j535ghg8hh'));
