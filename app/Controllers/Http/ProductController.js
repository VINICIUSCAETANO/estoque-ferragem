'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Product = use("App/Models/Product")

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
      const products = Product.all()
      return products
  }
  
  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async store ({ request}) {
    const data = request.only([
      'code',
      'nf',
      'name',
      'description',
      'buying_price',
      'selling_price'
    ])
  
    const product = await Product.create({ ...data})
  
    return product
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const product = await Product.findOrFail(params.id)
      return product
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const product = await Product.findOrFail(params.id)

    const data = request.only([
      'code',
      'nf',
      'name',
      'description',
      'buying_price',
      'selling_price'
    ])

    product.merge(data)

    await product.save()

    return product
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
    }
}

module.exports = ProductController
