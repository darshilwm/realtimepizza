const authContoller = require("../app/http/controllers/authcontoller")
const cartcontoller = require("../app/http/controllers/customers/cartcontoller")

const homeContoller = require("../app/http/controllers/homecontroller")

function initRoutes(app){
    app.get("/",homeContoller().index)
    app.get("/cart",cartcontoller().cart)
    app.get("/login",authContoller().login)
    app.get("/register",authContoller().register)
}
module.exports = initRoutes