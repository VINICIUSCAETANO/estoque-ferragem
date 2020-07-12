'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SystemUsersSchema extends Schema {
  up () {
    this.create('system_users', (table) => {
      table.increments()
      table.json('permissions')
      table.integer('users_id')
      .unsigned()
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('system_users')
  }
}

module.exports = SystemUsersSchema
