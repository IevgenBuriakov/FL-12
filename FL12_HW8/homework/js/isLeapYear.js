function isLeapYear(timeData) {
    let date = new Date(timeData);
    if (isNaN(date)) {
      return 'Invalid Date';
    } else {
      let year = date.getFullYear();
      if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
          console.log(`${year} is a leap year`);
      }else{
          console.log(`${year} is not a leap year`);
      }
    }
  }
  
  isLeapYear('2020-01-01 00:00:00');
  isLeapYear(1213131313135465656654564646542132132131); 
