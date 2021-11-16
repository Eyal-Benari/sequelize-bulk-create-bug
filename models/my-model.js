const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class MyModel extends Model {
	id;
	data;

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
			data: {
				type: DataTypes.STRING,
				allowNull: false
			}
		};
	}

	static associate(dbModels) {
		this.hasMany(dbModels.MyNestedModel);
	}
}

module.exports = {
	MyModel
};
