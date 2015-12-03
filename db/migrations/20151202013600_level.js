'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('level',function(table){
		table.increments();
		table.integer('level');
		table.integer('points');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('level');
};
