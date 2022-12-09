module.exports = function (sequelize, DataTypes) {
	var test = sequelize.define("test", {
		testId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			primaryKey: true,
			autoIncrement:true
		},
		testNombre: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
        testNumero: {
            type: DataTypes.STRING(45),
            allowNull: false
		},
		
	}, {
		tableName: "test",
		timestamps: false,
	});
	test.removeAttribute('id');
	return test;
};
