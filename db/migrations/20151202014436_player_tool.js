'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('player_tool', function (table) {
		table.integer('player_id').unsigned().index().references('id').inTable('player');
		table.integer('rater_id').unsigned().index().references('id').inTable('rater');
	}).then(function(){
		console.log('table player_tool created');
		return true;
	},function(){
		console.log('table player_tool could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('player_tool');
};
