/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	attributes: {
		initials: {
			type: 'string'
		},
		points: {
			type: 'integer'
		},
		profile:{
			type: 'string'
		},
		user:{
			model:'user'
		},
		level:{
			model:'level'
		},
		playerrater:{
			collection: 'rater',
			via: 'raterplayer',
			dominant: true
		}
	}
};

