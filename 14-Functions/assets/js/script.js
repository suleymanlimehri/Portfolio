// task1
// 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.
// let sum;
// let sub;
// let multi;
// let div;
// let calculate = (num1, num2) => {
//   sum = num1 + num2;
//   sub = num1 - num2;
//   multi = num1 * num2;
//   div = num1 / num2;
//   console.log(sum);
//   console.log(sub);
//   console.log(multi);
//   console.log(div);
// };
// calculate(9, 7);

// task 2
// 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)

// let number=(...rest)=>{
// for (let i = 0; i < rest.length; i++) {
//     if(rest[i]%2==0){
//         console.log(`eded cutdur ${rest[i]}`)
//     }
//     else{
//         console.log(`eded tekdir ${rest[i]}`)
//     }
// }
// }
// number(14,20,35,40,57,60,100)

// task 3
// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100]
// let array=(...arr)=>{
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%4==0 && arr[i]%5==0){
//         sum+=arr[i];
//     }
// }
// console.log('cemi:',sum)
// }
// array(14, 20, 35, 40, 57, 60, 100)

// task 4
// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.
// let sentence=(cumle,simvol)=>{
//     let count=0;
//     for (let i = 0; i < cumle.length; i++) {
//         if(cumle[i]==simvol){
//             count++;
//         }
//     }
//     console.log(`${cumle} de ${simvol} ${count} qeder var`);
// }
// sentence("Camaat","a");

// task 5
// 5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient)
// let Aboundanttodeficient = (num) => {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       sum += i;
//     }
//   }
//   if (sum > num) {
//     console.log(`${num}-Aboundant ededdir`);
//   } else {
//     console.log(`${num}-Deficient ededdir`);
//   }
// };
// Aboundanttodeficient(12);
// Aboundanttodeficient(13);
// Aboundanttodeficient(45);
// Aboundanttodeficient(70);
// Aboundanttodeficient(35);

// task6
// // 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.
// let number = (...arr) => {
//   let newarr = 0;
//   for (let i = 0; i < arr.length; i++) {
//       newarr = arr[i] * arr[i];
//       console.log(newarr);
//   }
// };
// number(7, 5, 12, 10, 20, 22, 8);

// task7
// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]
// let number=(...arr)=>{
//     let newarr=[];
//     let min=arr[0].age;
//     let max=arr[0].age;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].age>max){
//             max=arr[i].age; 
//         }
//         if(arr[i].age<min){
//             min=arr[i].age;
//         }
// }
// newarr.push(min,max,max-min);
//         return newarr
// }
// console.log(number({ name: "Mehriban", age: 20 },
//     { name: "Mujgan", age: 29 },
//     { name: "Ayan",   age: 10 },
//     { name: "Aydan",  age: 17 },
//     { name: "Fidan",  age: 34 },
//     { name: "Aytac",  age: 45 },))

