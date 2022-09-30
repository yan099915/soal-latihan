// Sort data berdasarkan score yang paling besar -> kecil
// kalau ada nilai yang sama, sort berdasarkan huruf pertama di nama.
//  tidak boleh pakai .sort()

function highestScore(students) {
  // Code disini
}
// TEST CASE
console.log(
  highestScore([
    {
      name: "agus",
      score: 90,
    },
    {
      name: "agung",
      score: 85,
      class: "wolves",
    },
    {
      name: "ahmad",
      score: 74,
    },
    {
      name: "anas",
      score: 78,
      class: "wolves",
    },
  ])
);

console.log(
  highestScore([
    {
      name: "alex",
      score: 100,
    },
    {
      name: "irwin",
      score: 92,
      class: "wolves",
    },
    {
      name: "eri",
      score: 92,
    },
    {
      name: "irsan",
      score: 71,
      class: "wolves",
    },
    {
      name: "umar",
      score: 80,
      class: "tigers",
    },
  ])
);

console.log(highestScore([])); //{}
