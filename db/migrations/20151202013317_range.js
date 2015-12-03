'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('range',function(table){
		table.increments();
		table.string('description');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('range');

};
