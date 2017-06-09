var moment = require('moment'),
    Q = require('Q'),
    Entry = require('../entry/entry.js')

var save = function (req, res, next) {

    var newEntry = Entry ({
        name: req.body.name,
        hour: moment(req.body.hour).toDate(),
        time: req.body.time
    });

    // save entry
    var entryPromise = Q.ninvoke(newEntry, 'save');
    entryPromise.then(function(entry) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({id: entry[0]._id})
    }, function(err) {
        throw err;
    });

}

module.exports = save;