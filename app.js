// 1. Massivdagi noyob qiymatlar:
// Raqamlar massivini oladigan va Set-dan foydalanib, faqat asl massivdagi noyob qiymatlarni o'z ichiga olgan yangi massivni qaytaradigan funksiyani yozing.

// function raqam(massiv) {
//   let yangiRaqam = new Set(massiv);
//   return Array.from(yangiRaqam);
// }
// let massiv = [1, 2, 3, 3, 4, 5, 5];
// console.log(raqam(massiv));

// 3. Elementlarning o'ziga xosligini tekshirish:
// Massivni qabul qiladigan va agar massivning barcha elementlari yagona boвЂlsa, rost qiymatini qaytaradigan funksiyani yozing, aks holda Set dan foydalaning.

// function raqam(massiv) {
//   if (new Set(massiv).size === massiv.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let son = [1, 2, 3, 4, 5];
// let son2 = [1, 2,3, 3, 4, 5];
// console.log(raqam(son));
// console.log(raqam(son2));

// 4. Ikki massivni dublikatsiz birlashtirish:
// Ikki massivni oladigan va Set-dan foydalanib ikkala massivning barcha noyob elementlarini o'z ichiga olgan yangi massivni qaytaradigan funksiya yozing.

// function arrDubli(x, y) {
//   let yangiRaqam = new Set([...x, ...y]);
//   return Array.from(yangiRaqam);
// }

// let x = [1, 2, 3];
// let y = [4, 5, 6];
// console.log(arrDubli(x, y));

// 6. Massivdan dublikatlarni olib tashlash:
// Set yordamida massivni oladigan va dublikatsiz yangi massivni qaytaruvchi funksiyani yozing.

// function olibTashlash(massiv) {
//   return Array.from(new Set(massiv));
// }
// let massiv = [1, 2, 3, 3, 4, 5, 5];
// console.log(olibTashlash(massiv));


// 8. Ikki qatordagi noyob belgilar:
// Set-dan foydalanib, ikkita satrni oladigan va ikkala satrdan faqat noyob belgilarni o'z ichiga olgan yangi satrni qaytaradigan funktsiyani yozing.

// function arrDubli(a, b) {
//   let set1 = new Set(a);
//   let set2 = new Set(b);

//   let belgilar = new Set([...set1, ...set2]);
//   let yangiQator = Array.from(belgilar).join("");

//   return yangiQator;
// }

// let a = "abcd";
// let b = "cdefg";
// console.log(arrDubli(a, b));


// 9. Xaritada qiymatlarni qo'shish:
// Raqamli qiymatlarni o'z ichiga olgan Map ob'ektini oladigan va barcha qiymatlar yig'indisini qaytaradigan funktsiyani yozing.

// function qiymat(map) {
//     let sum = 0;
//     for (let value of map.values()) {
//         sum += value;
//     }
//     return sum;
// }

// let yangiMap = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ]);

// const xisob = qiymat(yangiMap);
// console.log(xisob); 

