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
    postMenu: (body) => {
        // const { nama_produk, harga_produk, id_kategori } = body
        // const queryString = `INSERT INTO produk SET nama_produk="${nama_produk}", harga_produk="${harga_produk}", id_kategori=${id_kategori}`
        const queryString = "INSERT INTO produk SET ?"
        return new Promise((resolve, reject) => {
            db.query(queryString, [body], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    patchMenu: (body) => {
        const { id, nama_produk, harga_produk, id_kategori } = body
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE produk SET nama_produk="${nama_produk}", harga_produk="${harga_produk}", id_kategori=${id_kategori} WHERE id=${id}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMenu: (id) => {
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM produk WHERE id=${id}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getMenuByName: (nama_produk) => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id WHERE produk.nama_produk=?`
            db.query(queryString, [nama_produk], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    sortMenuByNameASC: () => {
        const queryString = `SELECT produk.id, produk.nama_produk, produk.harga_produk, kategori.kategori FROM produk JOIN kategori ON produk.id_kategori=kategori.id ORDER BY produk.nama_produk ASC`
        return new Promise((resolve, reject)=>{
            db.query(queryString, (err,data)=>{
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