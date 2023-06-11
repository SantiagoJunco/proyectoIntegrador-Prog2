const data = require("../data/data");
const db = require("../database/models");
const Usuario = db.Usuario
const Producto = db.Producto

const userController = {
  profile: function (req, res) {
    let id = req.params.id
    Producto.findAll({
      include: [
        { association: "productoUsuario" }
      ],where: [{usuarioId: id}] ,order: [
        ['createdAt', 'DESC'],
      ]
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
  }
}
module.exports = userController