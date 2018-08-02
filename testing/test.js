const test = require('tape');
const supertest = require('supertest');
const router = require('../src/route_1');

test('test of / home page routes', (t) => {
    supertest(router)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'text/html', ' \'home page\' Should Return text/html');
            t.equal(typeof res.body, 'object', ' \'home page\' Should return object');
            t.end();
        });
});

test('test of / home page "css/style" routes', (t) => {
    supertest(router)
        .get('/public/css/style.css')
        .expect(200)
        .expect('Content-Type', 'text/css')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'text/css', ' \'style pag\' Should Return text/css');
            t.equal(typeof res.body, 'object', ' \'style pag\' Should return object');
            t.end();
        });
});

test('test of / home page "css/media" routes', (t) => {
    supertest(router)
        .get('/public/css/media.css')
        .expect(200)
        .expect('Content-Type', 'text/css')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'text/css', ' \'media pag\' Should Return text/css');
            t.equal(typeof res.body, 'object', ' \'media pag\' Should return object');
            t.end();
        });
});

test('test of / home page "js/Dom" routes', (t) => {
    supertest(router)
        .get('/public/js/dom.js')
        .expect(200)
        .expect('Content-Type', 'application/javascript')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'application/javascript', ' \'Dom pag\' Should Return application/javascript');
            t.equal(typeof res.body, 'object', ' \'Dom pag\' Should return object');
            t.end();
        });
});

test('test of / home page "js/xhr" routes', (t) => {
    supertest(router)
        .get('/public/js/xhr.js')
        .expect(200)
        .expect('Content-Type', 'application/javascript')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'application/javascript', ' \'xhr pag\' Should Return application/javascript');
            t.equal(typeof res.body, 'object', ' \'xhr pag\' Should return object');
            t.end();
        });
});

test('test of /unknown url', (t) => {
    supertest(router)
        .get('/unknown')
        .expect(404)
        .expect('Content-Type', 'text/html')
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'text/html', ' \'unknown pag\' Should Return text/html');
            t.equal(typeof res.body, 'object', ' \'unknown pag\' Should return object');
            t.equal(res.statusCode, 404, ' \'unknown page\' Should return 404');
            t.end();
        });
});

test('test of /news url', (t) => {
    supertest(router)
        .get('/news')
        .expect(200)
        .expect('Content-Type', 'application/javascript')
        .send(JSON.stringify({ query: 'cat', date: '2018-07-30' }))
        .end((err, res) => {
            t.error(err);
            t.equal(res.headers['content-type'], 'application/javascript', ' \'news pag\' Should Return application/javascript');
            t.equal(typeof res.body, 'object', ' \'news page\' Should return object');
            t.end();
        });
});

