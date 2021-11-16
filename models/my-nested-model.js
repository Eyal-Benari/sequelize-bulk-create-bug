const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class MyNestedModel extends Model {
	id;
	value;

	static get initOptions() {
		return {
			timestamps: false,
			sequelize: db,
			underscored: true
		};
	}

	static get attributes() {
		return {
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			value: {
				type: DataTypes.STRING,
				allowNull: false
			}
		};
	}

	static associate(dbModels) {
		this.belongsTo(dbModels.MyModel);
	}
}

module.exports = {
	MyNestedModel
};
