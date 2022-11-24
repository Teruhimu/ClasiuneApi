module.exports = function (sequelize, DataTypes) {
	var producto = sequelize.define("producto", {
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
	}, {
		tableName: "producto",
		timestamps: false,
	});
	producto.removeAttribute('id');
	return producto;
};
