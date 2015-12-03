'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('tool', function (table) {
		table.increments();
		table.string('name');
		table.string('description');
		table.string('url');
		table.string('type');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tool');
};
