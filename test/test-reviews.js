// test-reviews.js

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')
// const server = require('../server')
const should = chai.should()
const Review = require('../models/review')

// const Review = mongoose.model('Review', {
//     title: String,
//     movieTitle: String,
//     description: String,
//     rating: Number
// })

const runaway_review = {
    "title": "A Beautiful Love Story",
    "movieTitle": "Runaway",
    "description": "Kanye is Art",
    "rating": 5
}

const test_review = {
    "title": "Another Day in the Simulation",
    "movieTitle": "Dan Vichi Code",
    "description": "Nothing out of the ordinary",
    "rating": 1000000
}

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
                res.should.have.status(200)
                res.should.be.html
                done()
            })
    })

    // TEST NEW
    it('should display new form on /reviews/new GET', (done) => {
        chai.request(server)
            .get(`/reviews/new`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done()
                })
    })

    // TEST CREATE
    it('should create a SINGLE review on /reviews POST', (done) => {
        chai.request(server)
            .post('/reviews')
            .send(test_review)
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.html
                done()
            })
    })

    // TEST SHOW
    it('should show a SINGLE review on /reviews/<id> GET', (done) => {
        var review = new Review(test_review)
        review.save((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done()
                })
        })
    })

    // TEST EDIT
    it('should edit a SINGLE review on /reviews/<id>/edit GET', (done) => {
        var review = new Review(test_review)
        review.save((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}/edit`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done()
                })
        })
    })
    // // TEST UPDATE
    // it('should update a SINGLE review on /reviews/<id> PUT', (done) => {
    //     var review = new Review(test_review)
    //     review.save((err, data) => {
    //         chai.request(server)
    //             .put(`/reviews/${data._id}?_method=PUT`)
    //             .send({title: 'Title Update was a Success'})
    //             .send({movieTitle: 'Movie Update was a Success'})
    //             .send({description: 'Description Update was a Success'})
    //             .send({rating: '0'})
    //             .end((err, res) => {
    //                 res.should.html.status(200)
    //                 res.should.be.html
    //                 done()
    //             })
    //     })
    // })
    // TEST DELETE
    it('should delete a SINGLE review on /reviews/<id> DELETE', (done) => {
        var review = new Review(test_review)
        review.save((err, data) => {
            chai.request(server)
                .delete(`/reviews/${data._id}?_method=DELETE`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done();
                })
        })
    })

    // deleting tested reviews after
    after(() => {
        Review.deleteMany({title:'Test'}).exec((err, reviews) => {
            console.log(reviews)
            reviews.remove();
        })
    })
})
