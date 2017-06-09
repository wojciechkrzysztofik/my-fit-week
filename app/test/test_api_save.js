var chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect,
    should = chai.should(),
    integer = require('chai-integer');

chai.use(chaiHttp);
chai.use(integer);

describe('API - SAVE:', function() {
    it('/api/save should return id (integer)', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/save')
            .send({
                name: 'John Doe',
                hour: '2016-03-12 13:30:00',
                time: 60
            })
            .end(function(err, res) {
                expect(res).to.have.status(200);                
                expect(res.body).to.have.property('id')
                expect(res.body.id).to.be.an.integer()
            done();
        });
    });
});