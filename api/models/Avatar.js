/**
* Avatar.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	identity: 'avatar',
	attributes: {
		description:{
			type: 'string'
		},
		avatar:{
			type: 'string'
		},
		avatarlevel:{
			collection: 'level',
			via: 'levelavatar'
		}
	}
};

