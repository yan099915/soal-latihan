/*
 - rubah class AppleTree
 - tinggi pohon, bertambah secara random setiap tahun nya
 - jumlah buah yang diproduksi juga random setiap tahun nya
 - saat menambahkan buah baru, masukkan class Apple sebagai qty
 - saat umur pohon bertambah, set qty buah menjadi 0 lagi
 - Jika umur pohon lebih dari 10 tahun, maka kondisi kesehatan pohon sudah jelek
 - lakukan looping, sampai kesehatan pohon sudah jelek
*/

function getRandomNumber(number) {
  // get random number from 1 - 10
}
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this._umur = 0;
    this._tinggi = 0;
    this._qty = [];
    this._health = true;
  }

  // Grow the tree
  grow() {}

  // getrandomnumber untuk dapatkan tinggi random
  // umur pohon bertambah 1 setiap kali method dijalankan
  // if else untuk cek kesehatan pohon

  // Produce some apple
  produceApples() {
    // jumlah buah yang didapat, itu adalah hasil dari getrandomnumber
  }

  // Get some fruits
  harvest() {}
  // set qty jadi 0 lagi
  // return this._qty
}

class Apple {
  constructor() {
    this.qty = 1;
  }
}

var tree = new AppleTree();
do {
  tree.grow();
  tree.produceApples();

  console.log(
    `[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(
      2
    )} Meter | Apples Harvested = ${tree.harvest()}`
  );
} while (tree._health != false);
