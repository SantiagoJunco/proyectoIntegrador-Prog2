module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            unsigned: true,
            primaryKey : true,
            autoIncrement : true
        },
        idPost: {
            type : dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        idUsuario: {
            type : dataTypes.INTEGER,
            unsigned: true,
            allowNull: false
        },
        comentario: {
            type : dataTypes.STRING(500),
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
        tableName: "comentarios",
        timestamps: true
    }
    
    let Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            as: "comentarioProducto",
            foreignKey: "idPost"
         },
         Comentario.belongsTo(models.Usuario, {
            as: "comentarioUsuario",
            foreignKey: "idUsuario"
        }))
    }

    return Comentario;
}