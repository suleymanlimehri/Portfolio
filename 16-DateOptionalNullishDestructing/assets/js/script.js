// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi 
// sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın
// date=new Date()
// time=date.getHours()
// if(time>5 && time<12){
//     alert("Sabahın xeyir")
// }
// else if(time>12 && time<18){
//     alert("günortan xeyir")
// }
// else if(time>18 && time<20){
//     alert("axsamin xeyir")
// }
// else{
//     alert("gecen xeyre qalsin")
// }

// 2.Object Destructing istifadə edərək employee  obyektindən name, 
// department və contact (email, phone, emergencyContact sahələri daxil olmaqla) 
// məlumatlarını əldə edin. 
// Həmçinin emergencyContact-də name və relation məlumatı əldə edin.
// const employee = {
//   name: "Farid Ali",
//   department: "Engineering",
//   contact: {
//     email: "farid.ali@example.com",
//     phone: "555-1234",
//     emergencyContact: {
//       name: "Far For",
//       relation: "Spouse"
//     }
//   }
// };
// let{name,department,contact:{email,phone,emergencyContact:{name:emergyname,relation:emergyrelation}}}=employee
// console.log(`name:${name},department:${department},email:${email},phone:${phone},emergencyContactName:${emergyname},emergencyContactRelation:${emergyrelation}`)




// 3.Bu API-dən alınan məlumatları təmsil edir
// const apiResponse = [
//     {
//       id: 1,
//       title: "JavaScript əsasları",
//       author: "Səid Məmmədov",
//       stats: [2500, 150, 30]  
//     },
//     {
//       id: 2,
//       title: "Array Destructuring",
//       author: "Leyla Əliyeva",
//       stats: [1800, 220, 45]
//     },
//     {
//       id: 3,
//       title: "Müasir JavaScript",
//       author: "Tural Həsənli",
//       stats: [3200, 380, 70]
//     }
//   ];
// let { title, author, stats } = apiResponse[1];
// console.log(`Meqale:${title},Muellif:${author} ${stats}`)
// 1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın
// 2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)
// 3. Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"


// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin

//  1. Optional chaining ilə təhlükəsiz şəkildə userData-dan məlumatları əldə edin
//  2. Nullish coalescing ilə əksik məlumatlar üçün default dəyərlər təyin edin

//   Nəticə olaraq bu məlumatları qaytarın:
//   İstifadəçi adı (default: "Qonaq")
//   Profil şəkli URL (default: "/default-avatar.png")
//   Bio məlumatı (default: "Məlumat yoxdur")
//   Əlaqə emaili (default: "təyin edilməyib")
//   Premium statusu (default: false)

// function renderUserProfile(userData) { 
// return{
//     username: userData.user?.username ?? "Qonaq",
//     profilepicture: userData.user?.profile?.avatar ?? "/default-avatar.png",
//     bio: userData.user?.profile?.bio ?? "Məlumat yoxdur",
//     contact:userData.user?.contact?.email??"təyin edilməyib",
//     status:userData.user.account?.premium??false
// }
// }

// // Test cases
// console.log(renderUserProfile({
//   user: {
//     username: "mujgan",
//     profile: {
//       avatar: "/users/mujgan.jpg",
//       bio: "JavaScript developer",
//     },
//     contact: {
//       email: "mujgan@example.com"
//     },
//     account: {
//       premium: true
//     }
//   }
// }));

// console.log(renderUserProfile({
//   user: {
//     username: "mehriban",
//     profile: {
//       bio: ""
//     },
//     contact: {}
//   }
// }));

// console.log(renderUserProfile({
//   user: {
//     username: null
//   }
// }));