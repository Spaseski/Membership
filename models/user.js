var assert = require('assert');
var utilities = require('../lib/utilities')

//Constructor pattern
var User = function(args) {

    assert.ok(args.email, "Email is required");
    var user = {};

    user.email = args.email;
    //this is how you write a default in javascript
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLoginAt || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.authenticationToken = args.authenticationToken || utilities.randomString(18);

    return user;

};

module.exports = User;