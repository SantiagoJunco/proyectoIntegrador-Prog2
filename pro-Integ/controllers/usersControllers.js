const data = require("../data/data");
const db = require("../database/models");
const op = db.Sequelize.Op;
const Usuario = db.Usuario
const Producto = db.Producto

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
        return res.render('profile-edit', { data })
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
  }
}
module.exports = userController