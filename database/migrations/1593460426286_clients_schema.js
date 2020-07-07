'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('fantasy_name', 50)
      table.string('cnpj', 15)
      table.string('address', 100)
      table.string('city', 50).notNullable()
      table.string('state', 2).notNullable()
      table.string('zip_number', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
