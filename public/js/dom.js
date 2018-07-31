

const button = document.getElementById('button');
const search = document.getElementById('search');
const date = document.getElementById('date');

console.log(button);
console.log(search);
console.log(date);
button.addEventListener('click', (e) => {
    console.log(e.target);
  const searchQuery = {
    query: search.value,
    date: date.value,
  };
  fetch('POST', searchQuery, viewResult);
});

function viewResult(Items) {
  console.log(Items);
}
