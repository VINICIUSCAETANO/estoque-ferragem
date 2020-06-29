'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminsSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.boolean('has_rights').notNullable().defaultTo(false)
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminsSchema