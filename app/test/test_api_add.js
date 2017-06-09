var chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect,
    should = chai.should();

chai.use(chaiHttp);

describe('API - ADD:', function() {
    it('/api/add should return status code: 200', function() {
        chai.request('http://localhost:3000')
            .get('/api/add')
            .end(function(err, res) {
                expect(res).to.have.status(200);
            done();
        });
    });
});