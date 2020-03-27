const crypto = require('crypto');

module.exports =  function generateUnideId() {
    return crypto.randomBytes(4).toString('HEX');
}