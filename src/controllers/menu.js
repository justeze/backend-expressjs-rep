const menuModel = require('../models/menu')

const menuController = {
    getAllMenu: (_, res) => {
        menuModel.getAllMenu()
            .then((data) => {
                res.json(data)
            }).catch((err)=>{
                res.json(err)
            })
    },
    postMenu: (req, res) => {
        menuModel.postMenu(req.body)
            .then((data) => {
                res.json(data)
            }).catch((err)=>{
                res.json(err)
            })
    },
    patchMenu: (req, res) => {
        menuModel.patchMenu(req.body)
            .then((data) => {
                res.json(data)
            }).catch((err)=>{
                res.json(err)
            })
    },
    deleteMenu: (req, res) => {
        menuModel.deleteMenu(req.body)
            .then((data) => {
                res.json(data)
            }).catch((err)=>{
                res.json(err)
            })
    },
    getMenuByName: (req, res) => {
        menuModel.getMenuByName(req.query.nama_produk)
            .then((data) => {
                res.json(data)
            }).catch((err)=>{
                res.json(err)
            })
    },
    sortMenuByNameASC: (_, res) => {
        menuModel.sortMenuByNameASC()
        .then((data) => {
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    },
    sortMenuByKategoriASC: (_,res) => {
        menuModel.sortMenuByKategoriASC()
        .then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    },
    sortMenuByPriceDESC: (_,res) => {
        menuModel.sortMenuByPriceDESC()
        .then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    },
    sortLatestMenuDESC: (_,res) => {
        menuModel.sortLatestMenuDESC()
        .then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)}
        )
    }
}
module.exports = menuController;