const data = require("../data/data");
const db = require("../database/models");
const op = db.Sequelize.Op;
const Usuario = db.Usuario
const Producto = db.Producto
const bcrypt = require('bcryptjs')

const userController = {
  profile: function (req, res) {
    let id = req.params.id
    Usuario.findByPk(id, {
      include: [
        { association: "usuarioProducto" }
      ], order: [[{ model: Producto, as: 'usuarioProducto' }, 'createdAt', 'DESC']]
    })
      .then((data) => {
        console.log(data);
        return res.render('profile', { data })
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  profileEdit: function (req, res) {
    let id = req.params.id
    Usuario.findByPk(id, {
      include: [
        { association: "usuarioProducto" }
      ]
      })
      .then((data) => {
        console.log(data);
        return res.render('profile-edit', { data, error: null })
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  searchResultsUsuarios: function (req, res) {
    let busquedaForm = req.query.search

    Usuario.findAll({
      where: {
        [op.or]: [
          { email: { [op.like]: "%" + busquedaForm + "%" } },
          { usuario: { [op.like]: "%" + busquedaForm + "%" } }
        ]
      }
    })
      .then((data) => {
        console.log(data);
        return res.render('search-results-usuarios', { busqueda: data, busquedaForm})
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  guardarProfileEdit: function (req, res) {
    let usuarioId = req.params.id
    let contraseñaForm = req.body.contraseña

    Usuario.findByPk(usuarioId)
    .then(function (data) {
      if (contraseñaForm == "") {
        Usuario.update({
          usuario:req.body.usuario,
          fechaNacimiento: req.body.fecha_nacimiento,
          dni: req.body.nro_documento,
          fotoPerfil: req.body.foto_perfil
        },{ where: { id: usuarioId } })
        .then(function (data) {
          res.redirect('/')
          })
        .catch(function (error) {
          console.log(error);
        })
      } else {
        let contraseñaNueva = req.body.contraseña
        if (contraseñaNueva.length < 3) {
          return res.render('profile-edit', { data, error:"La contraseña debe tener al menos 3 caracteres."})
        } else {
          let contraseñaNuevaEncriptada = bcrypt.hashSync(contraseñaNueva,10)
          Usuario.update({
            usuario:req.body.usuario,
            contraseña: contraseñaNuevaEncriptada,
            fechaNacimiento: req.body.fecha_nacimiento,
            dni: req.body.nro_documento,
            fotoPerfil: req.body.foto_perfil
          },{ where: { id: usuarioId } })
          .then(function (data) {
            res.redirect('/')
            })
          .catch(function (error) {
            console.log(error);
          })
        }
      }
      })
    .catch(function (error) {
      console.log(error);
    })

 
  }
}
module.exports = userController