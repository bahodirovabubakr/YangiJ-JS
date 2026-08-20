// // let myDate = new Date();


// // let minutes = myDate.getMinutes();
// // let hour = myDate.getHours()
// // let day = myDate.getDay()
// // let month = myDate.getMonth()
// // let year = myDate.getFullYear()
// // let second = myDate.setSeconds()


// // console.log(hour + ":" + minutes);

// // console.log(day + ":" + month + ":" + year);


// function myClock() {
//   let myDate = new Date()

//   let hour = myDate.getHours();
//   let minutes = myDate.getMinutes();
//   let second = myDate.getSeconds();

//   let day = myDate.getDate();
//   let month = myDate.getMonth();
//   let year = myDate.getFullYear()

//   hours = String(hour).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   second = String(second).padStart(2, "0");

//   document.getElementById("clock").textContent =
//   `${hours} : ${minutes} : ${second}`

//   document.getElementById("year").textContent =
//   `${day} : ${month} : ${year}`;
// }

// myClock()

// setInterval(myClock, 100)

// let arr = [1, 2, 3, 4, 5];

// let qiymat = arr.reduce((acc, cur) =>  {
//   if (cur % 2 === 0) return acc + cur 
//     return acc;
// }, 0);

// console.log(qiymat);

//  let sum = 0;
//  arr.forEach((num) => {
//   sum += num;
//  })
//  console.log(sum);

// let newArr = arr.map((num) => {
//   return num * num;
// })

// console.log(newArr);

// let arr = [16, 5, 3, 6, 10, 1, 7]

// let SortArr = arr.sort((a, b) => {
//   return a - b;
// })

// console.log(SortArr);

// let arr = ["Oxford", "algoritm", "start 21"];


// let arr = Array(3).fill("salom", 0, 1)
// console.log(arr);

// Array.isArray - Teshirotgan ishlatiladi.

// let data1 = {};
// let data2 = [];

// console.log(typeof data1);
// console.log(typeof data2);


// if (Array.isArray(data1)) {
//     data1.push(1, 2, 3);
// } else if (Array.isArray(data2)) {
//     data2.push(1, 2, 3);
// } else if (!Array.isArray(data1)) {
//     data1.nums = "1, 2, 3";
// } else if (!Array.isArray(data2)) {
//     data2.nums = "1, 2, 3";
// }

// console.log(data1);
// console.log(data2);


// let str = "Gulmat";
// console.log(str.split(""));

// let arr = [1, true, false, "Olma"];
// console.log(arr);

// console.log(Array.of(1, "salom", "Olma", true, null));

// immutable - Array o'ziga tasir qilmaydi.
// let arr = [1, 2, 3, 4, 5] 
// let copy = arr.slice(0, 2)
// console.log(copy);


// mutable - Arrayni o'ziga tasir ko'rsatadi.


//     //Homework 
let students = [
    {id: 1, ism: "Adrurahmon", yosh: 13, ball: 97},
    {id: 2, ism: "Hayotbek", yosh: 14, ball: 82},
    {id: 3, ism: "Ibrohim", yosh: 14, ball: 70},
    {id: 4, ism: "Mubosher", yosh: 12, ball: 70},
    {id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70},
    {id: 6, ism: "Azizbek", yosh: 14, ball: 75},
    {id: 7, ism: "Abrorbek", yosh: 14, ball: 78},
    {id: 8, ism: "Muhammadali", yosh: 13, ball: 70},
    {id: 9, ism: "Husanboy", yosh: 13, ball: 80},
    {id: 10, ism: "Abubakr", yosh: 14, ball: 75},
    {id: 11, ism: "Adbulaziz", yosh: 14, ball: 80},
]

// let qoniqarli = "A'lo darajada";
// let qoniqarsiz = "Ko'proq xarakat qilishiz kerak"

// let obj =  Map.groupBy(students, (std) => {
//     if(std.ball >= 80) return "O'tdingiz";
//     return "Yiqildingiz";  
// }); 

// console.log(obj);


// let obj = {};

// for(let value of students ) {
//     if (obj[value.yosh]) obj[value.yosh].push(value);
//     else obj[value.yosh] = [value]
// }

// console.log(obj); 

// let obj = Object.groupBy(students, (std) => std.yosh);

// console.log(obj);


// Create 
// function addStudent(student) {
//     student = {id:students.length + 1, ...student};
//     students.push(student);
// }

// addStudent({ ism: "Abdukomil", yosh: 14, ball: 50 });
// addStudent({ ism: "Muhummadami", yosh: 14, ball: 30 });
// addStudent({ ism: "Samira", yosh: 14, ball: 35 });
// addStudent({ ism: "Osimxon", yosh: 14, ball: 60 });

// console.log(students);

// Read
// function getSortData(data, key) {
//     data.sort((a, b) => a[key].localeCompare(b[key]));
// };

// getSortData(students, "ism");

// function getFileredStudents(data, limit) {
//     return data.filter((obj) => obj.ball >= limit)
// }

// let filterArr =  getFileredStudents(students, 70);

// console.log(filterArr);


// function getUpdateStudents(data, id, changeIsm, changeBall) {
//     return data.map((obj) => {
//         if(obj.id === id) {
//             obj.ism = changeIsm;
//             obj.ball = changeBall;``
//         }
//         return obj;
//     })
// }

// getUpdateStudents(students, 5, "Eshmat", 100);
// console.log();

// function deleteStudent(data, deleteId) {
//     return data.filter((obj) => obj.id !== deleteId)
// }

// let delArr = deleteStudent(students, 6);
// delArr = deleteStudent(delArr, 9);
// console.log(delArr);
