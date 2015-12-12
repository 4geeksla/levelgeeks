/**
* Rater.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'rater',

	attributes: {
		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		state: {
			type: 'string'
		},
		points: {
			type: 'integer'
		},
		updown: {
			type: 'boolean'
		},
		tool: {
			model: 'tool'
		},
    //relationship many to many with player
		player: {
			collection: 'player',
			via: 'rater'
		}

	}
};

