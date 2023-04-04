const data = require("../data/data");

const productController = {
    product: function(req, res) {
        return res.render('product',{producto: data.productos[0],comentarios: data.comentarios});
      },
    agregarProducto:  function(req, res) {
        return res.render('product-add',{datosUsuario: data.usuario});
      },
    detalle:  function(req, res) {
        return res.render('search-results',{producto: data.productos[0],comentarios: data.comentarios});
      }
}
module.exports = productController