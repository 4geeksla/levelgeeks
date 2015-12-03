'use strict';

exports.up = function(knex, Promise) {
	return knex.createTable('avatar_level',function(table){
		table.integer('avatar_id').references('id').inTable('avatar');
		table.integer('level_id').references('id').inTable('level');
	});
};

exports.down = function(knex, Promise) {
 	return knex.dropTable('avatar_level');
};
