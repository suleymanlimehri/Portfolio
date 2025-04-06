// String Methods:
// verilmis string: "I am frontend DEVELOPER I LEARN Javascript"
// 1.Verilmis string-de sait herflewrin tapilmasi
// 2.Verilmish string-de sozlerin bosluga gore sayi.
// 3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın
// 4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// 5. Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// 6. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ
// 7. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin.
//  Əgər söz 4 hərfdən azdırsa o qısaldılmır. 
// İxtisar zamanı başdakı və sondakı hərflər saxlanılır, 
// ortada olan hərflərin sayı yazılır. 
// Cümlədə heç bir durğu işarəsi olmayacaq. 
// Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t





// task1
// let func = (str) => {
//   return str.split("").filter(item =>item == "I" || item == "a" || item == "o" || item == "e" || item == "E" || item == "O" || item == "A" || item == "i");
// };
// console.log(func("I am frontend DEVELOPER I LEARN Javascript"));


// task2
// let num=(str)=>{
//     return str.split(" ").length-1 
// }
// console.log(num("I am frontend DEVELOPER I LEARN Javascript"));

// task3
// let num=(str)=>{
//     return str.split(" ").reduce((a,b)=>a.length>b.length?a:b)
// }
// console.log(num("I am frontend DEVELOPER I LEARN Javascript"));


// task4
// let num=(str)=>{
//     return str.split(" ").filter(item=>item==item.toUpperCase()).map((item,index)=>`${item} - indexi: ${index}`).join(" ")
// }
// console.log(num("I am frontend DEVELOPER I LEARN javascript")); 

// task5
// let func=(str)=>{
//     return str.split(" ").filter(item=>item.match(/[A-Z]/g)?item.length>2:"")
// }
// console.log(func("İ Am FRontend DEVEloper i LEaRN javascript"));

// task6
// let num=(str)=>{
//     return str.split(" ").map(item=>item[0]).join("")
// }
// console.log(num("i am frontend dEVELOPER i lEARN javascript"));


// task7
// let num=(str)=>{
//     return str.split(" ").map(el=>el.length<4?el:el[0]+el.slice(1).length+el[el.length-1])
// }
// console.log(num("alma heyva nar gilas ciyelek"));



// Array Methods:
// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
// 2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
// 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.
// 4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
// const customers = [
//     {
//       name: "Tyrone",
//       personal: {
//         age: 33,
//         hobbies: ["Bicycling", "Camping"],
//       },
//     },
//     {
//       name: "Elizabeth",
//       personal: {
//         age: 25,
//         hobbies: ["Guitar", "Reading", "Gardening"],
//       },
//     },
//     {
//       name: "Penny",
//       personal: {
//         age: 36,
//         hobbies: ["Comics", "Chess", "Legos"],
//       },
//     },
//   ];
// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)



// task1
// let funct = (arr) => {
//   let say = arr.reduce((a, item) => {
//       a[item] = (a[item] || 0) + 1;
//       return a; 
//   },{}); 
//   console.log(say);
// };
// funct([12, 22, 34,34, 45, 12, 22]);



// task2
// let num=(arr)=>{
//   return arr.filter(el=>el==el.split("").reverse().join(""))
// }
// console.log(num(["ana", "ata" ,"alma", "heyva", "nar"]))



// task3
// let num=()=>{
//   let number=Number(prompt("eded daxil edin")) 
//   return number,arr.filter(item=>item<number)
  
// }
// console.log(num([1,2,3,4,5,6,7,8,9]))



// task4
// const customers = [
//     {
//       name: "Tyrone",
//       personal: {
//         age: 33,
//         hobbies: ["Bicycling", "Camping"],
//       },
//     },
//     {
//       name: "Elizabeth",
//       personal: {
//         age: 25,
//         hobbies: ["Guitar", "Reading", "Gardening"],
//       },
//     },
//     {
//       name: "Penny",
//       personal: {
//         age: 36,
//         hobbies: ["Comics", "Chess", "Legos"],
//       },
//     },
//   ];
  
//   const Hobbies = customers.reduce((acc, customer) => {
//     return acc.concat(customer.personal.hobbies);
//   }, []);
  
//   console.log( Hobbies);


// task5
// let num=()=>{
//     arr=[1,2,3,4,5,6,7,8,9]
//     console.log(arr)
//     console.log("maksimum eded:",Math.max(...arr))
//     console.log("minumum eded:",Math.min(...arr))
//     sum=arr.reduce((a,b)=>a+b)
//     console.log(sum/arr.length)
//     console.log(arr.map((item)=>Math.pow(item,2)))
// }
// num()
  