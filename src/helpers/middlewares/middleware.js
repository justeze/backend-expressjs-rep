const responseForm = require("../form/responseForm");
const _ = require("underscore");

const productMiddleware = (req, res, next) => {
    const requestPath = req.route.path;
    const requestMethod = req.method;
    const isParamsEmpty = _.isEmpty(req.params);
    const isBodyEmpty = _.isEmpty(req.body);
    
    console.log(requestPath)
    if (requestMethod === "GET" && (requestPath === "/" ||   requestPath === "/sortMenuByNameASC" || requestPath === "/sortMenuByPriceDESC" || requestPath === "/sortLatestMenuASC" || requestPath === "/sortMenuByKategoriASC" || requestPath === "/search")) {
        if (requestPath === "/search/" && isParamsEmpty) {
            const errorMsg = "request params cannot be blank";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else if (requestMethod === "DELETE" && requestPath === "/") {
        if (isBodyEmpty) {
            const errorMsg = "request body cannot be blank";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else if (requestMethod === "POST" && requestPath === "/") {
        if (isBodyEmpty) {
            const errorMsg = "request Body cannot be blank!";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else if (requestMethod === "PATCH" && requestPath === "/") {
        if (isBodyEmpty) {
            const errorMsg = "request Body cannot be blank!";
            responseForm.error(res, errorMsg);
        } else {
            next();
        }
    } else {
        const errorMsg = "cannot recognize the request!";
        responseForm.error(res, errorMsg);
    }
};


module.exports = {productMiddleware};