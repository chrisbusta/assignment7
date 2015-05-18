
var answer1 = document.querySelector('#answer');
answer1.innerText = '';
items.forEach( function) (item) {
  answer1.appendChild(document.createTextNode(item.price + '\n'));
});




//question 1

//Get all prices
var allPrices = items.map( function (item) {
  return item.price;
}

//Get the sum
var sum = allPrices.reduce( function (previous, current) {
  return previous + current;
});

//Average
var average = sum / allPrices.length;

//answer
var.answer = average.toFixed(2);

//drop answer in DOM mode
document.querySelector('#answer1').textContent = "The average price is $" + answer;

