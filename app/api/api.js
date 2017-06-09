var api = require('express').Router(),
    add = require('./add'),
    save = require('./save'),
    get_list = require('./get_list');

function get(req, res, next) {
    
}

function update(req, res, next) {
    
}

function remove(req, res, next) {
    
}

// /api/add
api.get('/add', add)

// /api/get_list
api.get('/get_list', get_list)

// /api/get
api.get('/get', get)

// /api/save
api.post('/save', save)

// /api/update
api.get('/update', update)

// /api/remove
api.get('/remove', remove)

module.exports = api