'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('avatar',function(table){
		table.increments();
		table.string('description');
		table.string('avatar');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('avatar');

};
