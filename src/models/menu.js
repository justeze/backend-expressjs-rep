const db = require("../configs/dbMySql")

const menuModel = {
    getAllMenu: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT produk.id, produk.nama_produk, produk.harga_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    postMenu: (value) => {
        const { nama_produk, harga_produk, id_kategori } = value
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO produk SET nama_produk=?, harga_produk=?, id_kategori=?"
            db.query(queryString, [nama_produk, harga_produk, id_kategori], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    patchMenu: (value) => {
        const { id, nama_produk, harga_produk, id_kategori } = value
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE produk SET nama_produk=?, harga_produk=?, id_kategori=? WHERE id=?"
            db.query(queryString, [nama_produk, harga_produk, id_kategori, id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMenu: (value) => {
        const { id } = value
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM produk WHERE id=?"
            db.query(queryString, [id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}
module.exports = menuModel;