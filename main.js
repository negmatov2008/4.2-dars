//Data types
// I. primitive / odddiy bitta qiymat  qabul qiladigan malumot turi
//  1. number 34, NaN, Infinity
//  2. string 'Salom', ""
//  3. boolean true / false
//  4. undefined undefined
//  5. null null

//  6. symbol
//  7. bigInt 89759347584937n
// II.non-primitive
//  8.Object -> array, function

//Vazifa

//3-masalsa
let a = +prompt("Birinchi sonni kiriting");
let b = +prompt("Ikkinchi sonni kiriting");
if (a == b) console.log("togri");
if (a != b) console.log("Notogri");

//4-masala
let c = a + b;
if (c == 10) console.log("Uraa");
if (c != 10) console.log("Keyingi safar urinib koring");

//6-masala
let son = +prompt("Sonni kiriting");
if (son % 10 != 1)
  if (son % 10 != 3)
    if (son % 10 != 5)
      if (son % 10 != 7) if (son % 10 != 9) console.log("juft son");
if (son % 10 != 0)
  if (son % 10 != 2)
    if (son % 10 != 4)
      if (son % 10 != 6) if (son % 10 != 8) console.log("Toq son");

//7-masala
let raqam = +prompt("Raqamni kiriting");
if (raqam == 1) console.log("Bir raqami");
if (raqam == 2) console.log("Ikki raqami");
if (raqam == 3) console.log("Uch raqami");
if (raqam == 4) console.log("To'rt raqami");
if (raqam == 5) console.log("Besh raqami");
if (raqam == 6) console.log("Olti raqami");
if (raqam == 7) console.log("Yetti raqami");
if (raqam == 8) console.log("Sakkiz raqami");
if (raqam == 9) console.log("Toqqiz raqami");
//8-masalsa
let e = +prompt("Qiymatni kiriting");
if (e >= 1) if ("Salom") console.log("true");
if (e == 0) if (NaN) if ("") if (0) console.log("False");
//9-masala
let first = +prompt("1-son")
let second = +prompt("2-son")
if (first == second) console.log("Teng")
if (first != second) console.log("Teng emas")
//10-masala
let firstHuman = +prompt("1-odam")
let secondtHuman = +prompt("2-odam")
if (firstHuman > secondtHuman) console.log("1-odam katta")
if (firstHuman < secondtHuman) console.log("2-odam katta")
