const mongoose = require('mongoose');

module.exports = function(value) {
    return mongoose.Types.ObjectId.isValid(value);
}