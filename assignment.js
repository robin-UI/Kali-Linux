// ๐ฆ๐ฆThis is a package to get input from user
// const read = require('readline-sync');



// ๐++++++++---๐งฟTask 2---+++++++++๐
// const read = require('readline-sync');
// char=read.question('Enter a character : ');
// console.log('You enterd character is : ' + char);





// ๐++++++++---๐งฟTask 2---+++++++++๐
// const read = require('readline-sync');
// var num1 = Number(read.question ('Enter number one '))
// var num2 =Number(read.question('Enter number two '))
// console.log("Answer is : " + (num1 + num2))




// ๐++++++++---๐งฟTask 3---+++++++++๐
const read = require('readline-sync');
console.log("Program should accept 3 inputs from the user and calculate simple interest for the given inputs.");
let pAmount = Number(read.question('Principal amount : '));
let iRate = Number(read.question('Interest rate : '));
let sIntrest = Number(read.question('Number of years : '));

let SI = ((pAmount*iRate*sIntrest)/100);
console.log("Simple interest : "+ SI);





// ๐++++++++---๐งฟTask 4---+++++++++๐
// console.log("Enter your mark(1-100)");
// let mark = Number(read.question('Enter your mark : '));

// if (mark >= 50) {
//         console.log("You passed");
//     }else if (mark < 1 || mark > 100) {
//             console.log("Invalid mark");
//         }
//         else{
//                 console.log("You fail");
//         }


// ๐++++++++---๐งฟTask 5---+++++++++๐
// let mark = Number(read.question('Enter your percentage : '));

// if(mark > 90){
//     console.log("A grade");
// }
// else if(mark >80){
//     console.log("B grade");
// }
// else if(mark > 70){
//     console.log("C grade");
// }
// else if(mark > 60){
//     console.log("D grade");
// }
// else if(mark > 50){
//     console.log("E grade");
// }
// else{
//     console.log("Failed");
// }



// ๐++++++++---๐งฟTask 6---+++++++++๐
// let num = Number(read.question('Enter any num : '));

// switch (num) {
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//             console.log("Tuesdaay");
//             break;
//             case 3:
//                 console.log("Wednsdsay");
//                 break;
//     case 4:
//         console.log("Thirsday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saterday");
//         break;
//         case 7:
//             console.log("Sunday");
//             break;
//         }
        

// ๐++++++++---๐งฟTask 7---+++++++++๐
// let num = Number(read.question('Enter any num : '));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} + ${num} = ${num*i}`)
// }


// ๐++++++++---๐งฟTask 8---+++++++++๐
// let num = Number(read.question('Enter any number : '));
// let value = 0;

// for (let i = 1; i < num; i++) {
//     if (i % 2 != 0) {
//         value = i + value;
//     }
// }
// console.log(value);


// ๐++++++++---๐งฟTask 9---+++++++++๐
// let num = Number(read.question('Enter any number : '));

// let pat ;

// for (let i = 1; i <= num; i++) {
    //     pat = 1;
    //     for(let j= 2; j<=i; j++){
        //         pat = pat  +  j.toString();
        //     }
        //     console.log(pat + "  " );
// }





// ๐++++++++---๐งฟTask 10---+++++++++๐
// let num = Number(read.question('Enter array size : '));

// let array1 = [];
// let array2 = [];

// for(let i = 0; i < num; i++){
//     array1 [i] =  Number(read.question(`Enter array1 [${i}] : `))
// }

// for(let i = 0; i < num; i++){
//     array2 [i] =  Number(read.question(`Enter array2 [${i}] : `))
// }

// let temp = array1;
// array1 = array2;
// array2 = temp;

// console.log("After replace");
// console.log(`Array 1 : ${array1}`);
// console.log("Array 2 : " + (array2));



// ๐++++++++---๐งฟTask 11---+++++++++๐
// let num = Number(read.question('Enter array size : '));

// let array = [];
// let odd=0;

// for(let i = 0; i < num; i++){
    //     array [i] =  Number(read.question(`Enter array1 [${i}] : `));
    //     if (array[i] % 2 !== 0) {
        //         odd++;
//     }
// }

// console.log(odd);



// ๐++++++++---๐งฟTask 12---+++++++++๐
// let num = Number(read.question('Enter array size : '));

// let array = [];


// for(let i = 0; i < num; i++){
//     array [i] =  Number(read.question(`Enter array [${i}] : `))
// }

// array.sort(function(a, b){return b - a});
// console.log(array );




// ๐++++++++---๐งฟTask 13---+++++++++๐
// let name = read.question('Enter your name : ');


// let strArray = name.split('');
// let strReverse = strArray.reverse();
// let strJoin = strReverse.join('');

// if (name == strJoin) {
    //     console.log('It is a palindrome');
    // }else{
        //     console.log('It is not a palindrome');
    // }
    
    


// ๐++++++++---๐งฟTask 15---+++++++++๐

// main();

// function main() {
    
//     display(getArray());
    
//     function getArray() {
//         let nume = Number(read.question('Enter your size : '));
//         var arr = [];
//         for(let i = 0; i < nume; i++){
//             arr[i] = Number(read.question('Enter your Array size : '));
//         }
//         return arr;
//     }

//     function display(arry) {
    //         console.log(arry);
    //     }
    
// }



// ๐++++++++---๐งฟTask 16---+++++++++๐
// let num = Number(read.question('Enter your size : '));
// let isPrime = true;

// if(num == 1) {
    //     console.log("1 is neither prime nor composite number.");
    // }
    // else if (num > 1) {
        //     for (let i = 2; i < num; i++) {
            //         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
    //         console.log(`${num} is a prime number`);
    //     } else {
        //         console.log(`${num} is a not prime number`);
        //     }
// }
// else{
    //     console.log("The number is not a prime number.");
// }




// ๐++++++++---๐งฟTask 17---+++++++++๐
// let num1 = Number(read.question('Enter first number : '));
// let operation = read.question('Enter operation : ');
// let num2 = Number(read.question('Enter Second number : '));

// console.log(calclation(num1, operation, num2));

// function calclation (a, symbol, b) {
//     switch (symbol) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//             case "*":
//                 return a * b;
//                 case "/":
//                     return a / b;
//                     default:
//                         console.log("Invalid")
//     }
// }


// ๐++++++++---๐งฟTask 18---+++++++++๐
// let writtenTest = Number(read.question('Enter Written test mark : '));
// let labExams  = Number(read.question('Enter Lab exams mark : '));
// let assignments  = Number(read.question('Enter Assignments mark : '));

// let grade = (writtenTest * 70)/100 + (labExams * 20)/100 + (assignments * 10)/100;

// console.log(grade);




// ๐++++++++---๐งฟTask 19---+++++++++๐
// let annualIncome = Number(read.question('Enter your Annual Income : '));

// if (annualIncome < 2500000){
    //     console.log("No Tax");
    // }
    // else if(annualIncome > 250000 && annualIncome < 500000){
//     console.log("5% Tax");
// }
// else if(annualIncome > 500000 && annualIncome < 1000000){
//     console.log("20% Tax");
// }
// else if(annualIncome > 1000000 && annualIncome < 5000000){
//     console.log("5% Tax");
// }







// ๐++++++++---๐งฟTask 20---+++++++++๐
// let num = Number(read.question('Enter num : '));
// // let temp ;
// let temp = 0;

// for(let i = 1; i< num; i++){
//     let pat = null;

//     for(let j=1; j<=i; j++){
//         temp ++;
//         pat = pat + temp.toString();
//     }
//     console.log(pat);
// }



// ๐++++++++---๐งฟTask 21---+++++++++๐
// let num = Number(read.question('Enter num : '));

// let arr = [];
// let newArr = [];

// for(let i=0; i < num; i++){
    //     arr[i] = Number(read.question('Enter Array value : '));
//     if (i !== 0) {
    //         newArr [i-1] = arr[i-1] * arr[i];
    //     }
    // }
    
    // console.log(newArr);
    
    
    
// ๐++++++++---๐งฟTask 25---+++++++++๐
// let library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
    //         title: 'Steve Jobs',
    //         author: 'Walter Isaacson',
    //         readingStatus: true
    //     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// for (let i = 0; i < library.length; i++) {
    //     if (library[i].readingStatus === false) {
//         console.log(`You still need to read ${library[i].title} by ${library[i].author}`);
//     }
//     else{
//         console.log(`Already read ${library[i].title} by ${library[i].author}`);
//     }
// }





// ๐++++++++---๐งฟTask 26---+++++++++๐
// let my_string =  read.question('Enter string : ');



