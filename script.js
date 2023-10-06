// var number = 132;
// console.log("Number divisible by 2")
// while (number <= 148) {
//     if (number % 2 === 0){
//         console.log(number);
//     }
//     number ++;
// }

// console.log("Number divisible by 7")
// var number = 25;
// while (number <= 100) {
//     if (number % 7 ===0) {
//         console.log(number);
//     }
//     number ++;
// }


// console.log("For-Loop Example")
// for (var number = 0; number < 11; number++) {
//     console.log(number);
// }

// console.log("While-Loop Example")
// var number = 1;
// while (number < 11) {
//     console.log(number);
//     number ++;
// }

// console.log("Even number from 132 to 148 using For-Loop")
// for (var number = 132; number <= 148; number += 2) {
//     console.log(number);
// }

// var number = 132
// console.log("Even number from 132 to 148 using While-Loop")
// while (number <= 148) {
//     if (number % 2 ===0) {
//         console.log(number);
//     }
//     number += 1;
// }

// var number = 25
// console.log("Number divisible by both 7 and 5 from 25 to 100")
// while (number <= 100) {
//     if ((number % 7 ===0) & (number % 5 ===0)) {
//         console.log(number);
//     }
//     number += 1;
// }

// for (var number = 25; number <= 100; number++) {
//     if ((number % 7 === 0) & (number % 5 === 0)) {
//         console.log(number);
//     }
// }

// Odd number from 132 to 148
// var number = 132
// while (number <= 148) {
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
//     number += 1;
// }

// for (var number = 132; number <= 148; number++) {
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
// }

// Print the first number from 1 to 2 that is divisible by 2
// for (var number = 2; number <= 10; number++) {
//     if (number % 2 === 0) {
//         console.log(number);
//         break;
//     } else {
//         number += 1;
//     }
// }

// Print only even number from 1 to 10 using continue
// for (var number = 1; number <= 10; number++) {
//     if (number % 2 !== 0) {
//         continue;
//     } else {
//         console.log(number);
//     }
//     number += 1;
// }

// function HelloMen(name) {
//     console.log("Hello " + name);
// }

// HelloMen("Tuấn");

// function bmiCalculator(weight, length) {
//     var bmi = weight / (length * length);
//     console.log("BMI: " + bmi);
// }

// bmiCalculator(1.73, 80);

// Function With The Return Value
// Function Declaration
// function cube(number) {
//     return (number * number * number);
// }

// var cube_9 = cube(9);

// console.log(cube_9);

// Function Expression
// var calculateCube = function (number) {
//     return (number * number * number);
// }

// var cube_8 = calculateCube(8);
// console.log("Cube_8: " + cube_8);

// Q1: Substraction
// function Substraction(number1, number2) {
//     return (number2 - number1);
// }

// var result = Substraction(1, 22);
// console.log(result);

// Q2: Is-Odd
// function isOdd(number) {
//     if (number % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var result = isOdd(9);
// console.log(result);

// Q3: Total-Sum
// function totalSum(number) {
//     var sum = 0;
//     for (var index = 1; index <= number; index++) {
//         sum += index;
//     }
//     return sum;
// }

// var test = totalSum(2000000000);
// console.log(test);

// function sayName() {
//     var name = "NYU9HC";
//     console.log(name);
// }

// sayName();

// var name = "NYU9HC";
// console.log(name);

// function sayHi(name) {
//     var greetings = "Hi ";
//     console.log(greetings + name);
//     sayBye();

//     function sayBye() {
//         console.log("Bye");
//     }
// }

// var sentence = "Hello World";

// function sayHi() {
//     var sentence = "Good Morning";
//     console.log(sentence);
// }

// sayHi();
// console.log(sentence);

// var students = ["hoangth5", "nyu9hc"];
// console.log(students[0]);

// var animial = ["King", "Muscle", "Hunter", "Hercules", "Icarus", "Centaurus", "God", "Knight"];
// console.log(animial);
// var animial_length = animial.length;

// //Push method add a new item to the end of array
// animial.push("Elephant");
// console.log(animial);

// // //Pop method to remove the last items
// // var lastAnimal = animial.pop();
// // console.log(lastAnimal);

// //Unshift to add new item to the beginning of the first index
// animial.unshift("Buffallo");
// console.log(animial);

// //indexOf
// var indexCentaurus = animial.indexOf("King");
// console.log(indexCentaurus);

// // slice
// var subsetAnimal = animial.slice(1, 6) // King - Icarus
// console.log(subsetAnimal);

// // Q1: access the last element of arrays using length
// var books = ["Spark", "Kafka", "Hadoop", "Flink", "Airflow", "Impala"];
// var booksLength = books.length;
// console.log(books[booksLength - 1]);

// // Q2: 
// var movies = [
//     ["Yui Hatano", "Aime Fukada", "Rina Ishihara"],
//     ["Himawari", "Boruto", "Sarada"],
//     ["Uzumaki Naruto", "Uchiha Sasuke", "Haruno Sakura"],
//     ["Nobi Nobita", "Honekawa Suneo", "Goda Takeshi"],
//     ["Songoku", "Songohan", "Vegeta"]
// ];
// console.log(movies[1][2]);

// var books = ["Spark", "Kafka", "Hadoop", "Flink", "Airflow", "Impala"];
// var count = books.length;
// while (count > 0) {
//     console.log(books[count - 1]);
//     count --;
// }
// console.log("For-Loop Example");
// for (var index = 0; index < books.length; index++) {
//     var element = books[index];
//     console.log(element);
// }

// books.forEach(function (book) {
//     console.log(book);
// })

// Create an array from 1 to 20 using push method
// var array = []
// count = 1
// while (count < 21) {
//     array.push(count);
//     count += 1;
// };
// console.log(array);
// console.log("----------------------------");
// array.forEach(function (element) {
//     if (element % 5 === 0) {
//         console.log(element);
//     }
// })

var students = {
    "Name": "Nguyen Hoang Thien",
    "Title": "Fullstack Software Engineer",
    "Salary": "42.000.000 VNĐ",
    "Company": "Grab",
    "Entrance": "1/2025",
    "Annual Growth": "18%",
    "Annual Package": "20 - 22",
    "Leave": "18"
};
var lOcation = "Company";
console.log(students[lOcation]);