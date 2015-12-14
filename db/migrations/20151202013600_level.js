'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('level',function(table){
		table.increments();
		table.integer('level');
		table.integer('points');
    table.timestamps();
	}).then(function(){
		console.log('table level created');
		return true;
	},function(){
		console.log('table level could not be created');
		return false;
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('level');
};
