'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('player',function(table){
		table.increments();
		table.string('initials');
		table.string('profile');
		table.integer('points');
		table.integer('user_id').references('id').inTable('user');
		table.integer('level_id').references('id').inTable('level');
		table.timestamps();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('player');
};
