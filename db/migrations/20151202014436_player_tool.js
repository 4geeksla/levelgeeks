'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('player_tool', function (table) {		
		table.integer('player_id').references('id').inTable('player');
		table.integer('rater_id').references('id').inTable('rater');	
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('player_tool');
};
