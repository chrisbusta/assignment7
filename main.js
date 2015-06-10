
var answer1 = document.querySelector('#answer');
answer1.innerText = '';
items.forEach( function (item) {
  answer1.appendChild(document.createTextNode(item.price + '\n'));
});

// get all prices
// get the number of items
add


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




// question 2

var filtered = items.filter(function (item) {

  var isover14 = item.price > 14;
  var isunder18 = item.price < 18;


  return (isover14 && isunder18)

});


document.querySelector('#answer2').textContent = answer2;
}

// question 3

var gbp = items.filter(function(x){
  return x.currency_code === 'GBP';

});

console.log(gbp);

gbp.forEach( function (y){
  console.log(y.title, y.price);
});

// question 4

var woody = items.filter(function(item){
   return item.materials.indexof('wood') !== -1;

});


// question 5

eightMaterials.forEach(function(item){
  var title = item.title;
  var materials = item.materials;
  var materialsLength = materials.length;

  var titleAndLength = title + 'has' + materialsLength + 'materials' + '\n';
});

