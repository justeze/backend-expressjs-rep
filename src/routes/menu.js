const express = require('express')

const menuController = require('../controllers/menu')

const menuRouter = express.Router()

menuRouter.get('/', menuController.getAllMenu)
menuRouter.post('/', menuController.postMenu)
menuRouter.patch('/', menuController.patchMenu)
menuRouter.delete('/', menuController.deleteMenu)


module.exports = menuRouter