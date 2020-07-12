'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminsSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.string('username', 20).notNullable().unique()
      table.string('email', 50).notNullable().unique()
      table.string('password', 15).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminsSchema
