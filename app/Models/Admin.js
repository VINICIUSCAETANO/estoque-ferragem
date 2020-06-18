'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Admin extends Model {
    profile() {
        return  this.hasOne('App/Models/User')
    }
}

module.exports = Admin
