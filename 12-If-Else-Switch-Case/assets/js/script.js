// Task 1.1//
const dizel = 0.9;
const benzin = 1;
const premium = 1.5;
let text = Number(prompt("1 - Dizel\n2 - Benzin\n3 - Premium"));
switch (text) {
  case 1:
    if (dizel) {
      let litr = Number(prompt("Neçə litr yanacaq almaq istəyirsiniz?"));
      let pul = Number(prompt("Yanacaq üçün nə qədər pulunuz var?"));
      let total = litr * dizel;
      if (pul >= total) {
        alert(
          `Siz ${litr} litr yanacaq aldınız. Ödənilən məbləğ: ${total} AZN.`);
      } else {
        itkin = total-pul;
        alert(
          `Üzr istəyirik, pulunuz yetərli deyil. Cari balans: ${pul} AZN, umumi məbləğ: ${total} AZN. itkin meblegi:${itkin}`
        );
      }
    }
    break;
  case 2:
    if (benzin) {
        let litr = Number(prompt("Neçə litr yanacaq almaq istəyirsiniz?"));
        let pul = Number(prompt("Yanacaq üçün nə qədər pulunuz var?"));
        let total = litr * dizel;
        if (pul >= total) {
          alert(
            `Siz ${litr} litr yanacaq aldınız. Ödənilən məbləğ: ${total} AZN.`);
        } else {
          itkin = total-pul;
          alert(
            `Üzr istəyirik, pulunuz yetərli deyil. Cari balans: ${pul} AZN, umumi məbləğ: ${total} AZN. itkin meblegi:${itkin}`
          );
        }
      }
break;
  case 3:
    if (premium) {
        let litr = Number(prompt("Neçə litr yanacaq almaq istəyirsiniz?"));
        let pul = Number(prompt("Yanacaq üçün nə qədər pulunuz var?"));
        let total = litr * dizel;
        if (pul >= total) {
          alert(
            `Siz ${litr} litr yanacaq aldınız. Ödənilən məbləğ: ${total} AZN.`);
        } else {
          itkin = total-pul;
          alert(
            `Üzr istəyirik, pulunuz yetərli deyil. Cari balans: ${pul} AZN, umumi məbləğ: ${total} AZN. itkin meblegi:${itkin}`
          );
        }
      }
      break;
  default:
    alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
}
//Task 2//
let season = prompt("Enter your season");
switch (season) {
  case 'yaz':
    alert("yaz ayları: mart,aprel,may");
    break;
  case 'yay':
    alert("yay ayları:iyun,iyul,avqust");
    break;
  case 'payız':
    alert("payız ayları:sentyabr,oktyabr,noyabr");
    break;
  case 'qış':
    alert("qış ayları:dekabr,yanvar,fevral");
    break;
}
