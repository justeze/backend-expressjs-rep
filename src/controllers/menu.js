const menuModel = require('../models/menu')

const menuController = {
    getAllMenu: (_, res) => {
        menuModel.getAllMenu()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    postMenu: (req, res) => {
        menuModel.postMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    patchMenu: (req, res) => {
        menuModel.patchMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    deleteMenu: (req, res) => {
        menuModel.deleteMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}
module.exports = menuController;