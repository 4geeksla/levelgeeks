/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

	attributes: {
		username: {
			type: 'string',
		},
		first_name: {
			type: 'string',
		},
		last_name: {
			type: 'string',
		},
		email: {
			type: 'string',
			email: true,
      required: true,
      unique: true,
		},
		password: {
			type: 'string',
		},
		enabled: {
			type: 'boolean',
      defaultsTo: true,
		},
		role: {
			model: 'role',
      defaultsTo: 1,
      columnName: 'role_id'
		},
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
	},
  // Here we encrypt password before creating a User
  beforeCreate : function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) return next(err);
        values.password = hash;
        next();
      })
    })
  },
  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.password, function (err, match) {
      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};

