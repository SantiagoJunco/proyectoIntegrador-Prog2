const data = require("../data/data");

const indexController = {
    index: function(req, res) {
        return res.render('index',{productos: data.productos, comentarios: data.comentarios});
      },
    login: function(req, res) {
        return res.render('login');
      },
    register:  function(req, res) {
        return res.render('register');
      }
}
module.exports = indexController