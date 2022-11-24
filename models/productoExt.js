module.exports = function (sequelize, DataTypes) {
	var productoExt = sequelize.define("productoExt", {
		productoId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			primaryKey: true,
			autoIncrement:true
		},
		productoDenominacion: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
        productoDescripcion: {
            type: DataTypes.STRING(200),
            allowNull: true
		},
		productoPrecio: {
            type: DataTypes.DECIMAL(12,4).UNSIGNED,
            allowNull: true
		},
		productoEstado: {
            type: DataTypes.TINYINT,
            allowNull: true
		},
		usuarioId: {
            type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		usuarioNombreApellido: {
			type: DataTypes.STRING(100),
			allowNull: false,
		  },
		usuarioNumero: {
			type: DataTypes.STRING(45),
			allowNull: false,
		  },

	}, {
		tableName: "producto_ext",
		timestamps: false,
	});
	productoExt.removeAttribute('id');
	return productoExt;
};
