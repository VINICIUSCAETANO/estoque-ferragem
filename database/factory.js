'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory')

Factory.blueprint('App/Models/Product', async (faker) => {
  return {
    qr_code: faker.qr_code(),
    name: faker.name(),
    description: faker.description(),
    buying_price: faker.buying_price(),
    selling_price: faker.selling_price(),
    ipi_tax: faker.ipi_tax()
    //password: await Hash.make(faker.password())
  }
})
