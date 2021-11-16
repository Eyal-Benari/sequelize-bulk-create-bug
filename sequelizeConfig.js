module.exports = {
	database: {
		dialect: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		password: "postgres",
		database: "bulk-create-bug",

		migrationStorage: "sequelize",
		migrationStorageTableName: "BulkCreateBugMigrationStorage"
	}
};
