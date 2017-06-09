var chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect,
    should = chai.should();

chai.use(chaiHttp);

describe('API - GET LIST:', function() {
    it('/api/get_list should return status code: 200', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/get_list')
            .end(function(err, res) {
                expect(res).to.have.status(200);
            done();
        });
    });

    it('/api/get_list should return message', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/get_list')
            .end(function(err, res) {
                expect(res.body).to.have.property('message');
            done();
        });
    });
});