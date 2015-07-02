
// var answer1 = document.querySelector('#answer');
// answer1.innerText = '';
// items.forEach( function (item) {
//   answer1.appendChild(document.createTextNode(item.price + '\n'));
// });

// get all prices
// get the number of items



//question 1

//Get all prices
var allPrices = items.map( function (item) {
  return item.price;
});

//Get the sum
var sum = allPrices.reduce( function (previous, current) {
  return previous + current;
});

//Average
var average = sum / allPrices.length;

//answer
var answer = average.toFixed(2);

//drop answer in DOM mode
document.querySelector('#answer1').textContent = "The average price is $" + answer;








// question 2

// var filtered = items.filter(function (item) {

//   var isover14 = item.price > 14;
//   var isunder18 = item.price < 18;





//   return isover14 && isunder18

// });
var itemsBetween = items.filter(function(item) {
  if (item.price > 14 && item.price < 18)
    return item;
});


var answer2 = document.querySelector('#answer2');
answer2.innerText = "";
itemsBetween.forEach(function(item) {
  answer2.appendChild(document.createTextNode(item.title + '\n'));
});
// var answer2 = ' ';





// document.querySelector('#answer2').textContent = answer2;









// // question 3

var gbp = items.filter(function(x){
  return x.currency_code === 'GBP';


});

// console.log(gbp);

// gbp.forEach( function (y){
//   console.log(y.title, y.price);
//   return
// });
gbp.forEach(function(y) {
  document.querySelector('#answer3').textContent = y.title + " costs " + y.price;
});




// document.querySelector('').textContent

// // question 4




var woody = items.filter(function(item) {
   if (item.materials.indexOf("wood") !== -1)
       return item.materials;


});

answer4.innerText = "";

woody.forEach(function (object) {
  answer4.appendChild(document.createTextNode(object.title + ' is made of wood.' + '\n \n'));
});


// // question 5


var answer5 = document.querySelector('#answer5');

answer5.innerHTML = '';

var eightMaterials = items.filter(function(item){
  return  item.materials.length >= 8;
});

var title, materials, materialslength, titleAndLength;


eightMaterials.forEach(function( item){
   title = item.title;
   materials = item.materials;
   materialsLength = materials.length;

   titleAndLength = title + 'has' + materialsLength + 'materials' + '\n';

answer5.appendChild(document.createTextNode(titleAndLength));
materials.forEach( function (material){
  answer5.appendChild(document.createTextNode(material + '\n'));
});

});



// // question 6

var handMade = items.filter(function(object) {
  if (object.who_made === "i_did")
    return object;
})

document.querySelector('#answer6').textContent = handMade.length + " were made by their sellers";








