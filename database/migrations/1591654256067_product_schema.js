'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
        table.increments()
        table.string('qr_code', 50).notNullable()
        table.string('name', 35).notNullable()
        table.string('description', 100)
        table.decimal('buying_price', 20, 2).notNullable()
        table.decimal('selling_price', 20, 2)
        table.decimal('ipi_tax', 20, 2)
        table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
