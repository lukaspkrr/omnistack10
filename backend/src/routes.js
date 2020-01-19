const { Router } = require('express')
const DevController = require('./app/controller/DevController')
const SearchController = require('./app/controller/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes