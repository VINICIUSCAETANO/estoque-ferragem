'use strict'

const User = use("App/Models/User")

class UserController {
    async create ({ request }) {
        const data = request.only(["username", "email", "password"])
    
        const user = await User.create(data)
    
        return user
      }

    async index () {
        const users = User.all()
      
        return users
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id)
      
        return user
    }

    async update ({ params, request, response }) {
        const user = await User.findOrFail(params.id)
      
        const data = request.only([
          'username',
        ])
      
        user.merge(data)
      
        await user.save()
      
        return user
      }

    async destroy ({ params, auth, response }) {
     
        const user = await User.findOrFail(params.id)
      
        if (user.user_id !== auth.user.id) {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await user.delete()
      }
}

module.exports = UserController
