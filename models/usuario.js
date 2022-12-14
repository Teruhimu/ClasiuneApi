/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define('usuario', {
    usuarioId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarioNombreApellido: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    usuarioNumero: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    usuarioCorreo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    usuarioContrasenha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

  }, {
    timestamps: false,
    tableName: 'usuario'
  });
  usuario.removeAttribute('id');
  return usuario;
};
