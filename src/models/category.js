const db = require("../configs/dbMySql")

const menuModel = {
    getAllCategory: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM kategori";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err)
                }
            })
        })
    },
    postCategory: (body) => {
    const queryString = "INSERT INTO kategori SET ?"
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
        const { id, kategori } = body
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE produk SET kategori="${kategori}" WHERE id=${id}`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteMenu: (body) => {
        const { id } = body
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM kategori WHERE id=${id}`
            db.query(queryString, (err, data) => {
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