'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('rater', function (table) {
		table.increments();
		table.string('name');
		table.string('description');
		table.string('points');
		table.string('updown');
    table.string('state');
		table.integer('tool').unsigned().index().references('id').inTable('tool');
    table.timestamps();
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
