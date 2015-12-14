'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('rater', function (table) {
		table.increments();
		table.string('name');
		table.string('description');
		table.string('points');
		table.string('updown');
		table.integer('tool_id').unsigned().index().references('id').inTable('tool');
	}).then(function(){
		console.log('table rater created');
		return true;
	},function(){
		console.log('table rater could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('rater');
};
