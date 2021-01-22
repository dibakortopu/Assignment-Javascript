
// 1. Kilometer To Meter Convert 
 function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(1);
console.log(result);

// 2.Budget Calculator
function budgetCalculator(watch,mobile,laptop){
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
    cost = watch + mobile + laptop;
    return cost;   
}

var totalcost = budgetCalculator (-1,1,1)
console.log(totalcost);


/* 3.Hotel Cost */
function hotelCost (days){
var cost = 0;
if(days <= 10) {
    cost = days * 100;
}else if(days <= 20){
    var first10days = 10 * 100;
    var remaingdays = days - 10;
    var second10days = remaingdays * 80;
    cost = first10days + second10days;
}
else{
    var first10days = 10 * 100;
    var second10days = 10 * 80;
    var remaingdays = days - 20;
    var lastRemaingdays = remaingdays * 50;
    cost = first10days + second10days + lastRemaingdays;
}
return cost;
}
var totalcost = hotelCost(50);
console.log(totalcost);

// 4.Maga Friend
  function megaFriend(arr) {
    var arr = ['maruf', 'arif', 'rakib', 'manik', 'farhad', 'rayhan'];
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  console.log(megaFriend(['maruf', 'arif', 'rakib', 'manik', 'farhad', 'rayhan']));


//Budget Calculator
  function budgetCalculator(watch,mobile,laptop){
      var watch = watch * 50;
      var mobile = mobile * 100;
      var laptop = laptop * 500;
      cost = watch + mobile + laptop;
      return cost;   
  }
  
  var totalcost = budgetCalculator (1,1,1)
  console.log(totalcost);
  
  

