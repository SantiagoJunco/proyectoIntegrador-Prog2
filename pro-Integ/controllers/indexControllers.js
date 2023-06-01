const data = require("../data/data");
const db = require("../database/models")
const Producto = db.Producto

const indexController = {
    index: function(req, res) {
      let rel = {include: [{association: "productoUsuario"}]}
      Producto.findAll(rel,{raw:true,nest:true}, {order: [
        ['createdAt', 'DESC'], 
        ]
        })
          .then((data) =>{
            console.log(data);
            return res.render('index',{data})
          })
          .catch((error)=>{
            return console.log(error);
          })
    },
    login: function(req, res) {
        return res.render('login');
      },
    register:  function(req, res) {
        return res.render('register');
      }
}
module.exports = indexController