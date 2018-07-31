
const { handlerHomePage, handlerErrorPage, handlerOtherFiles } = require('./functions');

function router(request, respone) {
    const endpoint = request.url;
    if (endpoint === '/') {
        handlerHomePage(request, respone);
    } if (endpoint.includes('public')) {
        handlerOtherFiles(request, respone);

    } else {
        handlerErrorPage(request, respone);
    }
}
module.exports = router;
