export default function(sequelize, DataTypes) {
  const AccessToken = sequelize.define('AccessToken', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        AccessToken.belongsTo(models.User, {
          foreignKey: { name: 'userId', allowNull: false }
        })
        AccessToken.belongsTo(models.Client, {
          foreignKey: { name: 'clientId', allowNull: false }
        })
      }
    }
  })
  return AccessToken
}
