const express = require('express')

const menuRouter = require('./menu')


const indexRouter = express.Router()

indexRouter.use('/', menuRouter)
indexRouter.use('/search', menuRouter)

module.exports = indexRouter