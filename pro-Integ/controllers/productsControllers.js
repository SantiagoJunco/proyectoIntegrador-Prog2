const data = require("../data/data");
const db = require("../database/models");
const op = db.Sequelize.Op;
const Producto = db.Producto

const productController = {
  product: function (req, res) {
    let id = req.params.id
    Producto.findByPk(id,{include: [
      { association: "productoComentario", include: [{association: "comentarioUsuario"}]},{association:"productoUsuario"}
      ]})
      .then((data) => {
        console.log(data);
        return res.render('product', {data}) 
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  agregarProducto: function (req, res) {
    return res.render('product-add');
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
          return res.render('search-results',{busqueda: data})
        })
        .catch((error)=>{
          return console.log(error);
        })
  },
  crearProducto: function (req, res) {
    let imagenForm = req.body.imagen
    let productoForm = req.body.producto
    let descripcionForm = req.body.descripcion
    let fechaCargaForm = req.body.fechaCarga

    Producto.create({
      imagen: imagenForm,
      producto: productoForm,
      descripcion: descripcionForm,
      fechaCarga: fechaCargaForm,
      usuarioId: req.session.user.id
    })
    .then(function (product) {
     res.redirect('/')
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}
module.exports = productController