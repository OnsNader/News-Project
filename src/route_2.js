const http = require('http');

let arrayOfData = [];

function handlerAPI(request, respone) {

  let allData = '';
  request.on('data', (caches) => {
    allData += caches;
  });
  request.on('end', (err) => {
    if (err) throw err;

    makeRequest(JSON.parse(allData),respone);
  });
}

function makeRequest(Data,respone) {
  const search = Data.query;
  const date = Data.date;
  const url = `http://newsapi.org/v2/everything?apiKey=c81a105f5721488eba71743617508646&source=bbc-news&q=${search}&from=${date}&to=2018-07-30`;
  console.log(url);
  requestXHR(url,getArrayFromJSONFile,respone);
}

function requestXHR(url,callback,respone) {
  http.get(url, (resp) => {
    let allData = '';
    resp.on('data', (chunk) => {
      allData += chunk;
    });

    resp.on('end', () => {
      callback(JSON.parse(allData),respone);
    });

    resp.on('error', (err) => {
      console.log(`Error: ${err.message}`);
    });
  });
}

function getArrayFromJSONFile(Date,resopne) {
  for (let i = 0; i < Date.articles.length; i++) {
    const item = {};
    item.title = Date.articles[i].title;
    item.source = Date.articles[i].source.name;
    item.image = Date.articles[i].urlToImage;
    item.url = Date.articles[i].url;
    item.description = Date.articles[i].description;
    arrayOfData.push(item);
  }
  console.log(arrayOfData);
  resopne.end(JSON.stringify(arrayOfData));
 
 arrayOfData=[];
}

module.exports = handlerAPI;
