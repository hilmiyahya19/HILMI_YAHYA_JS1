// IF 

var tes = confirm("kamu yakin ?"); 

if (tes === true) {
    alert("user menekan ok");
} else {
    alert("user menekan cancel"); 
}

// // ELSE

// var angka = prompt (" masukkan angka :");

// if (angka % 2 == 0) {
//     alert ( angka + " adalah bilangan genap")
// } else if (angka % 2 == 1) {
//     alert ( angka + " adalah bilangan ganjil")
// } else {
//     alert("yang anda masukkan bukan angka.");
// }

// // NESTED IF

// var nilai = prompt("Masukkan nilai : ");

// if (nilai >= 70) {
//     // Kondisi pertama: Lulus
//     alert("Anda lulus!");

//     if (nilai >= 90) {
//         // Kondisi kedua: Nilai A
//         alert("Anda mendapat nilai A");
//     } else if (nilai >= 80) {
//         // Kondisi ketiga: Nilai B
//         alert("Anda mendapat nilai B");
//     } else if (nilai >= 70) {
//         // Kondisi keempat: Nilai C
//         alert("Anda mendapat nilai C");
//     }
// } else {
//     // Kondisi kelima: Tidak lulus
//     alert("Anda tidak lulus.");
// }

// // SWITCH CASE

// var item = prompt ("masukkan nama makanan / minuman : \n (ex: nasi,daging,susu,burger,softdrink,beer) ");
// switch (item) {
//     case "nasi":
//     case "daging":
//     case "susu":
//         alert("makanan/minuman sehat");
//         break;
//     case "burger":
//     case "softdrink":
//     case "beer":
//         alert("makanan/minuman tidak sehat");
//         break;
//     default:
//         alert("masukkan makanan/minuman yang tersedia");
//         break;
// }

// // FOR

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (noAngkot =  1 ; noAngkot <= jmlAngkot ; noAngkot++ ) {
//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ){
//         console.log("Angkot No. " + noAngkot + " lembur");   
//     }  else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");   
//     }
// }

// // WHILE

// alert ("selamat datang");
// var lagi = true;
// while (lagi) {
//     var nama = prompt("masukkan nama :");
//     alert ("halo " + nama) 
//     lagi = confirm("coba lagi ?");  
// }

// // DO WHILE

// var count = 1;

// do {
//     console.log("Perulangan ke-" + count);
//     count++;
// } while (count <= 10);

// // FUNCTION #1

// function jumlahVolumeDuaKubus(a,b) {
//     var total, volumeA, volumeB;
//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;
//     return total;
// }

// console.log(jumlahVolumeDuaKubus(1,2));
// console.log(jumlahVolumeDuaKubus(3,4));
// console.log(jumlahVolumeDuaKubus(5,6)); 


// // FUNCTION #2

// function tambah(a,b) {
//     return a + b;
// }
// function kali(a,b) {
//     return a * b;
// }

// var hasil = kali (tambah(1,2), tambah(3,4));
// console.log(hasil);


// // FUNCTION #3

// function tambah(params) {
//     var hasil = 0;
//     for (var i = 0 ; i < arguments.length ; i++) {
//         hasil += arguments[i];      
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4,5);
// console.log(coba);