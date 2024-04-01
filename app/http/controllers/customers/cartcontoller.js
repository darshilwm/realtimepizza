function coustomers(){
    return{
        cart(req,res){
            res.render("coustomers/cart")
        }
    }
}
module.exports = coustomers;