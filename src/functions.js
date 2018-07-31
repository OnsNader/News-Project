const fs = require('fs');
const path = require('path');

function handlerHomePage(request, respone) {
    respone.writeHead(200, { 'content-type': 'text/html' });
    fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
        if (err)
            throw err;
        else {
            respone.end(file);

        }

    });
}
function handlerErrorPage(request, respone) {
    respone.writeHead(404, { 'content-type': 'text/html' });
    fs.readFile(path.join(__dirname, '..', 'public', 'error.html'), (err, file) => {
        if (err)
            throw err;
        else {
            respone.end(file);
        }

    });

}
function handlerOtherFiles(request, respone) {
    const endpoint = request.url;
    const extension = endpoint.split('.')[1];
    const contentType = {
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
        jpg: 'image/jpg'
    }
    respone.writeHead(200, { 'content-type': contentType[extension] });
    fs.readFile(path.join(__dirname, '..', endpoint), (err, file) => {
        if (err)
            throw err;
        else {
            respone.end(file);
        }
    })


}
module.exports = { handlerHomePage, handlerErrorPage, handlerOtherFiles };