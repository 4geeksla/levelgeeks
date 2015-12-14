'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('player',function(table){
		table.increments();
		table.string('initials');
		table.string('profile');
		table.integer('points');
		table.integer('user_id').unsigned().index().references('id').inTable('user');
		table.integer('level_id').unsigned().index().references('id').inTable('level');
		table.timestamps();
	}).then(function(){
		console.log('table player created');
		return true;
	},function(){
		console.log('table player could not be created');
		return false;
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('player');
};
