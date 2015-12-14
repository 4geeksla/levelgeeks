'use strict';

exports.up = function(knex, Promise) {
  	return knex.schema.createTable('role', function (table) {
		table.increments('id');
		table.string('name');
		table.string('description');
	}).then(function(){
		console.log('table role created');
		return true;
	},function(){
		console.log('table role could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('role');
};
