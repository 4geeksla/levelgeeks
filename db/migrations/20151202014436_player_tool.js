'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('player_tool', function (table) {
		table.increments();
		table.string('initials');
		table.string('id_in_tool');
		table.string('project_id_in_tool');
		table.string('project_name_in_tool');
		table.integer('player_id').referencesColumn('id').inTable('player');
		table.integer('tool_id').referencesColumn('id').inTable('tool');
		table.integer('rater_id').referencesColumn('id').inTable('rater');	
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('player_tool');
};
