'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('level',function(table){
		table.increments();
		table.integer('points');
		table.integer('range_id').referencesColumn('id').inTable('range');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('level');
};
