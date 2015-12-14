'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('avatar_level',function(table){
		table.integer('avatar_id').unsigned().index().references('id').inTable('avatar');
		table.integer('level_id').unsigned().index().references('id').inTable('level');
	}).then(function(){
		console.log('table avatar_level created');
		return true;
	},function(){
		console.log('table avatar_level could not be created');
		return false;
	});
};

exports.down = function(knex, Promise) {
 	return knex.dropTable('avatar_level');
};
