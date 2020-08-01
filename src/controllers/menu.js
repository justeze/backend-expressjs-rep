const menuModel = require('../models/menu')

const menuController = {
    getAllMenu: (_, res) => {
        menuModel.getAllMenu()
            .then((data) => {
                res.json(data)
            })
            .catch(
                res.json({
                    msg: "gagal"
                })
            )
    },
    postMenu: (req, res) => {
        menuModel.postMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch(
                res.json({
                    msg: "gagal"
                })
            )
    },
    patchMenu: (req, res) => {
        menuModel.patchMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch(
                res.json({
                    msg: "id tidak terdaftar"
                })
            )
    },
    deleteMenu: (req, res) => {
        menuModel.deleteMenu(req.body)
            .then((data) => {
                res.json(data)
            })
            .catch(
                res.json({
                    msg: "id tidak terdaftar"
                })
            )
    },
    getMenuByName: (req, res) => {
        menuModel.getMenuByName(req.params.nama_produk)
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json({
                    msg: "gagal"
                })
            })
    }
}
module.exports = menuController;