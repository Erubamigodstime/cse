/* Lesson 3 */

/* FUNCTIONS */
console.log('its working')
// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    // Step 2: In the function, return the sum of the parameters number1 and number2
    const sum =  number1 + number2
    return sum
};


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    const value1 = document.getElementById('addend1').value;
    const num1 = parseInt(value1)
    const value2 = document.getElementById('addend2').value;
    const  num2 = parseInt(value2)
    const rtnValue  = add(num1, num2);
    // return  rtnValue
    const formElement = document.getElementById('sum');
    formElement.value = rtnValue;    

};
// Step 4: Assign the return value to an HTML form element with an ID of sum
// const formElement = document.getElementById('sum');
// formElement.value = rtnValue

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(minuend,subtrahend ){
    const minus = parseInt(minuend);
    const subs = parseInt(subtrahend);
    const sub = minus - subs
    return sub

};

const subtractNumbers = function(){
    const value2 = document.getElementById('minuend').value;
    const num2 = parseInt(value2);
    const value3 = document.getElementById('subtrahend').value;
    const num3 = parseInt(value3);
    const subValue  = subtract(num2, num3);
    const subElement = document.getElementById('difference');
    subElement.value = subValue;  
    
};
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.
const multiply = (factor1, factor2) => {
    const mult = factor1 * factor2
    return mult
};
const mulitplyNumbers = () => {
    const value4 = document.getElementById('factor1').value
    const num4 = parseInt(value4)
    const value5 = document.getElementById('factor2').value
    const num5 = parseInt(value5)
    const multValue  = multiply(num4, num5);
    const multElement = document.getElementById('product');
    multElement.value = multValue;

};
document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers);


const division = (dividend, divisor) => {
    const div = dividend / divisor
    return div
};
const divideNumbers = () => {
    const value6 = document.getElementById('dividend').value
    const num6 = parseInt(value6)
    const value7 = document.getElementById('divisor').value
    const num7 = parseInt(value7)
    const divValue  = division(num6, num7);
    const divElement = document.getElementById('quotient');
    divElement.value = divValue;

};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date().getDate();
// Step 2: Declare a variable to hold the current year
const year = new Date().getFullYear();
console.log(year) 
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const years = document.getElementById('year')
years.innerHTML = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const htmlArray = document.getElementById('array');
htmlArray.innerHTML = array;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = array.filter((num) => num % 2 === 1);
const htmlOdd =  document.getElementById('odds');
htmlOdd.innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even = array.filter((num) => num % 2 == 0);
const htmleven =  document.getElementById('evens');
htmleven.innerHTML = even;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sum = array.reduce(function(a, b){
  return a + b;
});
const htmlSource =  document.getElementById('sumOfArray');
htmlSource.innerHTML = sum;
// PROCESS 1
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
// const mapArray = array.map(function(element){
    // return element * 2;

// });
// PROCESS 2
function multNumber(number){
    return number * 2;
};
const mulMaps = array.map(multNumber);
const maps =  document.getElementById('multiplied');
maps.innerHTML = mulMaps;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sums = mulMaps.reduce(function(b, c){
    return b + c;
  });

const html =  document.getElementById('sumOfMultiplied');
html.innerHTML = sums;