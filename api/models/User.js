/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
			email: true
		},
		password: {
			type: 'string',
		},
		enabled: {
			type: 'boolean',
		},
		role: {
			model: 'role'
		}
	}
};

