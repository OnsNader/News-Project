const test = require('tape');
const supertest = require('supertest');
const router = require('../../src/route_1');

test('test of / home page routes', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, ' \'home page\' Should Return 200');
      t.equal(typeof res.body, 'object', ' \'news page\' Should return object');
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
      t.equal(res.statusCode, 200, ' \'style page\'  Should Return 200');
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
      t.equal(res.statusCode, 200, ' \'media page\'  Should Return 200');
      t.equal()
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
      t.equal(res.statusCode, 200, ' \'Dom page\'  Should Return 200');
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
      t.equal(res.statusCode, 200, ' \'Dom page\'  Should Return 200');
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
      t.equal(res.statusCode, 200, ' \'news page\' Should return 200');
      t.equal(typeof res.body, 'object', ' \'news page\' Should return object');
      t.end();
    });
});
