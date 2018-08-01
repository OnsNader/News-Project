const button = document.getElementById('button');
const search = document.getElementById('search');
const date = document.getElementById('date');

button.addEventListener('click', (e) => {
 const data=getDataFromFields();
  sendRequest(data);
});

function getDataFromFields(){
  return  {
    query: search.value,
    date: date.value,
  };
}