var get_list = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({message: 'Lorem ipsum dolor sit amets.'})
}

module.exports = get_list;