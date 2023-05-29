const data = require("../data/data");
const db = require("../database/models");
const Producto = db.Producto

const productController = {
  product: function (req, res) {
    let rel = { include: [
      { association: "productoComentario", include: [{association: "comentarioUsuario"}]}
  ]
  }
    let id = req.params.id
    Producto.findByPk(id, rel, { raw: true, nest: true })
      .then((data) => {
        console.log(data);
        return res.render('product', {data}) 
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  agregarProducto: function (req, res) {
    return res.render('product-add', { datosUsuario: data.usuario });
  },
  detalle: function (req, res) {
    return res.render('search-results', { producto: data.productos[0], comentarios: data.comentarios });
  }
}
module.exports = productController