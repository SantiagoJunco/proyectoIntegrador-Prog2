module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            unsigned: true,
            primaryKey : true,
            autoIncrement : true
        },
        imagen: {
            type : dataTypes.STRING(200),
            allowNull: false
        },
        producto: {
            type : dataTypes.STRING(150),
            allowNull: false
        },
        descripcion: {
            type : dataTypes.STRING(1000),
            allowNull: false
        },
        fechaCarga: {
            type : dataTypes.DATE,
            allowNull: false
        },
        usuarioId: {
            type : dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        createdAt:{
            type: dataTypes.DATE,
            allowNull:true
        },
        updatedAt:{
            type: dataTypes.DATE,
            allowNull:true
        },
        deletedAt:{
            type: dataTypes.DATE,
            allowNull:true
        }
  	}

    let config = {
        tableName: "productos",
        timestamps: true
    }
    
    let Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "productoUsuario",
            foreignKey: "usuarioId",
        });
        Producto.hasMany(models.Comentario, {
            as: "productoComentario",
            foreignKey: "idPost"
         })
   
    }

    return Producto;
}
