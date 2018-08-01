const button = document.getElementById('button');
const search = document.getElementById('search');
const date = document.getElementById('date');
window.onload = () => {
  let utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
  date.setAttribute("max", utc)
  return utc;
}


button.addEventListener('click', (e) => {
  const data = getDataFromFields();
  search.value = ``;
  sendRequest(data);
});

function getDataFromFields() {
  return {
    query: search.value ,
    date: date.value ,
  };

}
function tryTestingInFrontEnd(i){
  return i+1;
}
if (typeof module === 'undefined') {
  module.exports = {tryTestingInFrontEnd}
}
