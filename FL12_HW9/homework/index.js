function executeforEach(arr, func) {
    for(const i of arr){
      func(i);
    }
}

function convert(...args){
    const arr = [];
    for (const i of args){
      if(typeof i === 'string'){
        arr.push(+i);
      }else{
        arr.push(i + '');
      }
    }
    return arr;
} 

function mapArray(a, func){
    let arr = [];
    executeforEach(a, item => arr.push(func(+item)));
    return arr; 
}  

function filterArray(a, func){
    let arr = [];
    executeforEach(a, item => {
        if(func(item)){
        arr.push(item);
       }
    })
    return arr; 
} 

function flipOver(str){
    let newstr = str.split('');
    const len = newstr.length;
    let temp;
    for(let i = 0, j = len - 1; j > i; ){
        temp = newstr[i];
        newstr[i] = newstr[j];
        newstr[j] = temp;
        i++;
        j--;
    }
    return newstr.join('');
}

function makeListFromRange(range){
    const rangeArr = [];
    let startNum = range[0];
    const endNum = range[1];

    for( let i = startNum; i <= endNum; i++){
          rangeArr.push(i);
        }
    return rangeArr;
}

function getArrayOfKeys(actors, name){
    let names =[];
    executeforEach(actors, item => names.push(item[name]));
    return names;
}

function substitute(arr){
    const min = 30;
    return mapArray(arr, x => x < min ? '*' : x);
}

function getPastDay(date, daysAgo){
    const millisec = 86400000;
    const dateInMillisec = date.getTime();
    return new Date(dateInMillisec - daysAgo*millisec).getDate();
}
function formatDate(date){
    const minNum = 10;
    const data = date.getDate();
    const month = date.getMonth() +1 ;
    const yer = date.getFullYear();
    const hour = date.getHours() < minNum? '0' + date.getHours(): date.getHours() ;
    const min = date.getMinutes() < minNum? '0' + date.getMinutes(): date.getMinutes() ;
    return `${yer}/${month}/${data} ${hour}:${min}`;
}