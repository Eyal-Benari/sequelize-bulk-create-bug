const { DataTypes, Sequelize } = require("sequelize");

module.exports = {
	up: async queryInterface => {
		await queryInterface.createTable("my_nested_models", {
			id: {
				type: DataTypes.UUID,
				defaultValue: Sequelize.literal("uuid_generate_v4()"),
				allowNull: false,
				primaryKey: true
			},
			value: {
				type: DataTypes.STRING,
				allowNull: false
			},
			my_model_id: {
				type: DataTypes.UUID,
				allowNull: false,
				references: { model: "my_models", key: "id" }
			}
		});
	},
	down: async queryInterface => {
		await queryInterface.dropTable("my_nested_models");
	}
};
