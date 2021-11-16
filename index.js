const db = require("./db");
const { MyModel } = require("./models/my-model");
const { MyNestedModel } = require("./models/my-nested-model");

db.authenticate()
	.then(async () => {
		console.log("[sequelize] Connected to postgres");

		MyModel.init(MyModel.attributes, MyModel.initOptions);
		MyNestedModel.init(MyNestedModel.attributes, MyNestedModel.initOptions);

		MyModel.associate(db.models);
		MyNestedModel.associate(db.models);

		const records = [
			{
				data: "test1",
				MyNestedModels: [{ value: "value1" }, { value: "value2" }],
			},
			{ data: "test2" },
		];

		try {
			await MyModel.bulkCreate(records, {
				include: ["MyNestedModels"],
			});
			console.log("Successfully created bulk without individual hooks");
		} catch (err) {
			console.log("Failed to create bulk without individual hooks", err);
		}
		try {
			await MyModel.bulkCreate(records, {
				individualHooks: true,
				include: ["MyNestedModels"],
			});
			console.log("Successfully created bulk with individual hooks");
		} catch (err) {
			console.log("Failed to create bulk with individual hooks", err);
		}
	})
	.catch((err) => {
		console.log("[sequelize] Failed to authenticate with postgres", err);
		return shutdown(1);
	})
	.catch((err) =>
		console.log(
			"[sequelize] Failed to shutdown after authentication error",
			err
		)
	);
