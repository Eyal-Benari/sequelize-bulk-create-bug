Demonstrates a bug with Model.bulkCreate with {individualHooks: true, include: SubModel}

To run this demonstration please run postgres on localhost:5432 with username: "postgres" and password: "postgres"
Then run the following commands:
npm i
sequelize db:create
sequelize db:migrate
npm start