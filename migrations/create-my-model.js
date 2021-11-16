const { DataTypes, Sequelize } = require("sequelize");

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
		await queryInterface.createTable("my_models", {
			id: {
				type: DataTypes.UUID,
				defaultValue: Sequelize.literal("uuid_generate_v4()"),
				allowNull: false,
				primaryKey: true
			},
			data: {
				type: DataTypes.STRING,
				allowNull: false
			}
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("my_models");
	}
};
