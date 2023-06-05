const data = require("../data/data");
const db = require("../database/models")
const bcrypt = require('bcryptjs')
const Producto = db.Producto
const Usuario = db.Usuario

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
        return res.render('login',{error: null});
      },
    register:  function(req, res) {
        return res.render('register',{error: null});
      },
    registroDatos: function(req, res) {
      let emailForm = req.body.email
      let passForm = req.body.contraseña
      let passEncriptada = bcrypt.hashSync(passForm,10)

      if (emailForm == "") {
        return res.render('register', {error: 'Debe introducir un email'})

      }else if (passForm == "") {
        return res.render('register', {error: 'La contraseña es obligatoria'})
      } 
      else if (passForm.length < 4) {
        return res.render('register', {error: 'La contraseña debe tener más de 3 caracteres'})
      } 
      else {
        Usuario.findOne({where: [
          {email: emailForm}
          ]
          })
            .then((data) =>{
              console.log(data);
              if (data != undefined) {
                return res.render('register', {error: 'El email ya está registrado'})
              }else // crear usuario 
              Usuario.create({
                email: emailForm,
                usuario: req.body.usuario,
                contraseña: passEncriptada,
                fechaNacimiento: req.body.fecha_nacimiento,
                dni: req.body.nro_documento,
                fotoPerfil: req.body.foto_perfil
              })
              return res.redirect('/login')
            })
            .catch((error)=>{
              return console.log(error);
            })
      }
     
    },
    iniciarSesion: function(req, res) {
      let emailForm = req.body.email
      let passForm = req.body.contraseña
      
      Usuario.findOne({where: [
        {email: emailForm}
        ]
        })
        .then((data) =>{
          console.log(data);
          if (data == undefined) {
            return res.render('login',{error: 'El email no está registrado'})
          } else {
            let contraseña = data.contraseña
            let check = bcrypt.compareSync(passForm, contraseña)
            if (check) {
              return res.redirect('/')
            } else {
              return res.render('login', {error: 'La contraseña es incorrecta'})
            }
          }

          
        })
        .catch((error)=>{
          return console.log(error);
        })
    }
  }
          

module.exports = indexController