Demonstrates a bug with Model.bulkCreate with {individualHooks: true, include: SubModel}

To run this demonstration please run postgres with:
- host: localhost
- port: 5432
- username: "postgres"
- password: "postgres"

Then run the following commands:
```bash
npm i
sequelize db:create
sequelize db:migrate
npm start
```
