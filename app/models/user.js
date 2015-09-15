var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');

var User = db.Model.extend({
  tableName: 'users',
  //hasTimestamps: true,
  defaults: {
    //visits: 0
  },
  links: function() {
    return this.hasMany(Link);
  },
  initialize: function(){
    var username = options.json.username;
    var password = options.json.password;
    this.on('creating', function(model, attrs, options){
      bcrypt.hash(password, null, null, function(err, hash) {
      console.log('user initialization works');        
      model.set({username: username, password: password});
      });
    });
  }
});

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

module.exports = User;
