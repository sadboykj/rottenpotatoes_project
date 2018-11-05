// test-reviews.js

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
const should = chai.should()
const Review = require('../models/review')

chai.use(chaiHttp)

// request mocha to test 'Reviews'
describe('Reviews', () => {

    // TEST INDEX
    it('should index ALL reviews on / GET', (done) => {
        // ^ NAME OF TACO ^
        // makes request to server
        chai.request(server)
            // sends 'get' request to server
            .get('/')
            .end((err, res) => {
                res.should.have.status(500)
                res.should.be.html
                done()
            })
    })

    // TEST NEW
    // TEST CREATE
    // TEST SHOW
    // TEST EDIT
    // TEST UPDATE
    // TEST DELETE

})
