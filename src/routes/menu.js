const express = require('express')

const menuController = require('../controllers/menu')

const menuRouter = express.Router()

menuRouter.get('/', menuController.getAllMenu)
menuRouter.post('/', menuController.postMenu)
menuRouter.patch('/', menuController.patchMenu)
menuRouter.delete('/', menuController.deleteMenu)
menuRouter.get('/search/:nama_produk', menuController.getMenuByName)
menuRouter.get('/sortMenuByNameASC', menuController.sortMenuByNameASC)
menuRouter.get('/sortMenuByKategoriASC', menuController.sortMenuByKategoriASC)
menuRouter.get('/sortMenuByPriceDESC', menuController.sortMenuByPriceDESC)
menuRouter.get('/sortLatestMenuASC', menuController.sortLatestMenuDESC)

module.exports = menuRouter