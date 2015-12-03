'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('rater', function (table) {
		table.increments();
		table.string('name');
		table.string('description');
		table.string('points');
		table.string('updown');
		table.integer('tool_id').referencesColumn('id').inTable('tool');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('rater');
};
