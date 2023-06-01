const data = require("../data/data");
const db = require("../database/models");
const Usuario = db.Usuario

const userController = {
  profile: function (req, res) {
    let rel = { include: [
      { association: "usuarioProducto"}
  ]
  }
    let id = req.params.id
    Usuario.findByPk(id, rel, { raw: true, nest: true })
      .then((data) => {
        console.log(data);
        return res.render('profile', {data}) 
      })
      .catch((error) => {
        return console.log(error);
      })
  },
  profileEdit: function (req, res) {
    let rel = { include: [
      { association: "usuarioProducto"}
  ]
  }
    let id = req.params.id
    Usuario.findByPk(id, rel, { raw: true, nest: true })
      .then((data) => {
        console.log(data);
        return res.render('profile-edit', {data}) 
      })
      .catch((error) => {
        return console.log(error);
      })
  }
}
module.exports = userController