const result_section = document.getElementsByClassName("result");
function sendRequest(searchQuery) {
    fetch('POST', searchQuery, dealWithData);
}
function dealWithData(Data) {
  result_section[0].textContent=``;
    for (let i = 0; i < Data.length; i++) {
        createHtmlElements(Data[i]);
    }
}
function createHtmlElements(item) {
  
    //Create Elements 
    const container = document.createElement("div");
    const article = document.createElement("div");
    const img = document.createElement("div");
    const right = document.createElement("div");
    const more = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    //Add Classes 
    container.classList.add("container");
    article.classList.add("article");
    img.classList.add("img");
    right.classList.add("right");
    more.classList.add("more");


    //Add Information to Elements
    img.setAttribute("style",`background:url(${item.image});`);
    h1.textContent = item.title;
    h2.textContent = item.source;
    p.textContent= item.description;
    a.href=item.url;
    a.textContent=`The Full Article`;
    a.target=`_blank`;
    
    //Nesting Elements
    right.appendChild(h1);
    right.appendChild(h2);
    right.appendChild(more);
    more.appendChild(p);
    right.appendChild(a);
    article.appendChild(img);
    article.appendChild(right);
    container.appendChild(article);
    result_section[0].appendChild(container);



}