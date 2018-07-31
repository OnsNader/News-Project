function fetch(typeRequest, data, callback) {


  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const repon = xhr.responseText;
        callback(JSON.parse(repon));
      } else {
        console.log('error');
      }
    }
  };
  xhr.open(typeRequest, '/news', true);
  xhr.send(JSON.stringify(data));
}
