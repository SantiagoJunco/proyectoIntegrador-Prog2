const data = require("../data/data");

const userController = {
    profile:function(req, res) {
        return res.render('profile',{datosUsuario: data.usuario, productos: data.productos, comentarios: data.comentarios });
      },
    profileEdit: function(req, res) {
        return res.render('profile-edit',{datosUsuario: data.usuario});
      }
}
module.exports = userController