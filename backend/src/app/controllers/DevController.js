const axios = require('axios')
const Dev = require('./../models/Dev')

module.exports = {
  async index(req, res) {
    const devs = await Dev.find()

    return response.json(devs)
  },

  async store(req, res) {
    const { github_username, techs, longitude, latitude } = req.body

    try {
      const dev = await Dev.findOne({ github_username })

      if(!dev) {
        const response = await axios.get(`https://api.github.com/users/${github_username}`)

        const { name = login, avatar_url, bio } = response.data
  
        const location = {
          type: 'Point',
          coordinates: [ longitude, latitude ]
        }
  
        dev = await Dev.create({ 
          name, 
          avatar_url, 
          bio, 
          github_username, 
          techs, 
          location
        })
      }

      res.json(dev)
    } catch (err) {
      res.status(500).json({ message: 'Ocorreu um erro.' })
    }
  }
}