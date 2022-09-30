/*
 @nama merupakan adalah sebuah string yang berisikan nama user.
  bisa lebih dari 2 kata
  jika @nama tidak terdiri dari 2 kata, maka akan me-return 'Nama Invalid'

 @pilihan adalah sebuah string yang berisikan salah satu kata berikut:
  - depan -> konversi nama belakang nya menjadi singkat
    contoh: wahyu endy santoso -> wahyu endy S.

  - belakang -> konversi nama depan nya menjadi singkat
    contoh: wahyu endy santoso -> W. endy santoso

  - lengkap -> namanya tidak perlu di singkat
    contoh: wahyu endy santoso -> wahyu endy santoso

   Selain 3 kata tersebut, maka function akan me-return 'Pilihan Invalid'

DILARANG:
1. Dilarang menggunakan built-in function:
    split, slice, splice, join, reverse, substring, substr, indexOf, lastIndexOf,
    includes, some, every, find
2. Dilarang menggunakan regex
*/
function konversiName(nama, pilihan) {
  // code here
}

console.log(konversiName("Adryan Ahmad Noorrahman", "depan"));
console.log(konversiName("Muhammad Rahmat Irvan Rizal", "belakang"));
console.log(konversiName("wahyu", "depan"));
