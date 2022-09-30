const { default: axios } = require("axios");

/*
  - npm install terelbih dahulu
  - hit service https://jsonplaceholder.typicode.com/todos dengan method get menggunakan axios
  - filter berdasarkan status completed nya menggunakan array method .map
  - setelah itu, bedakan id nya menjadi ganjil & genap,
  - return sesuai degan format data ini:


    return {
      "false": {
        ganjil: [],
        genap: []
      },
      "true": {
        ganjil: [],
        genap: []
      }
    }

  note:
  - dilarang menggunakan looping fora
*/

const getTasks = async () => {
  // code here
};

getTasks().then((data) => console.log(data));
