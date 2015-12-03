'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('user', function (table) {
		table.increments('id');
		table.string('username');
		table.string('first_name');
		table.string('last_name');
		table.string('email');
		table.string('password');
		table.string('enabled');
		table.integer('role_id').references('id').inTable('role');
		table.timestamps();
	}).then(function(){
		console.log('table users created');
		return true;
	},function(){
		console.log('table useres could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('user');
};
