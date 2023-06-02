const data = require("../data/data");
const db = require("../database/models");
const op = db.Sequelize.Op;
const Producto = db.Producto

const productController = {
  product: function (req, res) {
    let rel = { include: [
      { association: "productoComentario", include: [{association: "comentarioUsuario"}]},{association:"productoUsuario"}
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
  searchResults: function(req, res) {
    let busqueda = req.query.search

    Producto.findAll({include: [{association: "productoUsuario"}], where: {
      [op.or]: [
        {producto: {[op.like] : "%" + busqueda + "%" }},
        {descripcion: {[op.like] : "%" + busqueda + "%" }}
      ]
    },
     order: [
      ['createdAt', 'DESC'], 
      ]
      })
        .then((data) =>{
          console.log(data);
          return res.render('search-results',{busqueda: data, query: {busqueda}})
        })
        .catch((error)=>{
          return console.log(error);
        })
  }
}
module.exports = productController