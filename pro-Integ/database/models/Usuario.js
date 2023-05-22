module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            unsigned: true,
            primaryKey : true,
            autoIncrement : true
        },
        email: {
            type : dataTypes.STRING(100),
            unique: true,
            allowNull: false

        },
        usuario: {
            type : dataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        contraseña: {
            type : dataTypes.STRING(250),
            allowNull: false
        },
        fechaNacimiento: {
            type : dataTypes.DATE,
            allowNull: false
        },
        dni: {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        fotoPerfil: {
            type : dataTypes.STRING(100),
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
        tableName: "usuarios",
        timestamps: true
    }
    
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "usuarioId"
        })
    }

    return Usuario;
}
