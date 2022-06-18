// Created array of ages 3, 9, 23, 64, 2, 8, 28, 93,
//find the value of the first and last number of the array in a dynamic way
let ages= [3, 9, 23, 64, 2, 8, 28, 93];
let lastnumber = ages[ages.length -1];
console.log(ages[0] - lastnumber);
//Add a new age to the array and repeat the first step
ages.push(22);
console.log(ages[0] - ages[ages.length -1]);
//Use a loop to iterate through the array and calculate the average age
var sum = 0;
for (var number of ages) {
    sum += number;
}
AvgAge = sum / ages.length;
console.log(AvgAge);
//Created array with ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’ inside it.
let Names= ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//Use a loop to iterate through the array and calculate the average number of letters per name, and print result
let AvgName = 0;
for(let i = 0;i<Names.length;i++){
    AvgName+=Names[i].length;
}
AvgName/=Names.length;
console.log(AvgName);
//iterate through the loop again and concatenate all the names together, seperated by spaces and return result to the console.
let NewNames = Names.join(" ");
console.log(NewNames);
//The last number can be found by first specifing a variable for the number to land in, and specifying the length of the array to -1, 
// which will cause the code to loop around to the end of the array.

// To find the first number of an array, you can use the name of the array, and the number zero, since arrays start counting at zero.
//New array nameLengths
namesArray= ["Kelly", "Sam", "Kate"]; 
nameLengths =[5, 3, 4];
let sumNames = 0;
for (let i = 0; i< nameLengths.length; i++) {
    sumNames+= nameLengths[i];
}
console.log(sumNames);
//Function that takes 2 parameters [word and N] as arguemtns and returns the word typed N ammount of times
let count = 10;
let word = ("Hello");
for (let i = 0;i<count;i++) {
    console.log(word);
}
//Function that takes FirstName and Lastname and reutrns a FullName
function fullName(a, b) {
    return a + ' ' + b;
}
console.log(fullName("Jim","Johnson"));
//Funtion that prints "True" if both arrays are equal to 100
    let array1 =[10, 20, 30, 40];
    let array2 =[32, 25, 16, 27];
    var sum1 = array1.reduce(function(a, b){
        return a + b;
    }, 0);
    var sum2 = array2.reduce(function(a, b){
        return a + b;
    }, 0);
if(sum1 === sum2){
    console.log("Match");
}
else if (sum1 !== sum2){
    console.log("Nope");
}
//Function that prints the average of an array,
let array3 =[10, 31, 24, 25, 30];
let sum4 = 0;
for (var i in array3){
    sum4 +=array3[i];
}
Avgsum = sum4 / array3.length;
console.log(Avgsum);
//Function that prints "true" if the average of an array is greater than the avarage of the elements in the 2nd array.
let array4 =[27, 32, 45, 67, 89];
let array5 =[35, 37, 45, 48, 64];
let sum5 = 0;
let sum6 = 0; 
for (var i in array4){
    sum5 +=array4[i];
}
Avg4 = sum4 / array4.length;
console.log(Avgsum);
for (var i in array5){
    sum6 +=array5[i];
}
Avg5 = sum6 / array5.length;
if (sum5 > sum6) {
    console.log("True");
} else {
    console.log("False");
}
//Create function 'willBuyDrink' that takes a boolean isHotOutside and a number moneyInPocket, and return true if is hot outside AND if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    return moneyInPocket > 10.50 && isHotOutside
    }
console.log(willBuyDrink(true, 14.00));
//Create own function, i'm gonna make a function called 'conversion' and its gonna be used to convert temperatures from celcius to farenhight since i don't know metric,
//also a lot of the content creators i watch on Youtube use metric.
function conversion(celsius) {
    let fahrenheit = celsius * 9/5 + 32
    return fahrenheit;
}
console.log(conversion(25));