
const { handlerHomePage, handlerErrorPage, handlerOtherFiles } = require('./functions');
const handlerAPI = require('./handling_api');

function router(request, respone) {
  const endpoint = request.url;
  console.log(endpoint);
  if (endpoint === '/') {
    handlerHomePage(request, respone);
  } else if (endpoint.includes('public')) {
    handlerOtherFiles(request, respone);
  } else if (endpoint.includes('/news')) {
    handlerAPI(request, respone);
  } else {
    handlerErrorPage(request, respone);
  }
}
module.exports = router;
