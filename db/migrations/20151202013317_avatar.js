'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('avatar',function(table){
		table.increments();
		table.string('description');
		table.string('avatar');
	}).then(function(){
		console.log('table avatar created');
		return true;
	},function(){
		console.log('table avatar could not be created');
		return false;
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('avatar');

};
