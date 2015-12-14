'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('tool', function (table) {
		table.increments();
		table.string('name');
		table.string('description');
		table.string('url');
		table.string('type');
    table.timestamps();
	}).then(function(){
		console.log('table tool created');
		return true;
	},function(){
		console.log('table tool could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tool');
};
