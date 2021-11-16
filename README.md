Demonstrates a bug with Model.bulkCreate with {individualHooks: true, include: SubModel}

Create local postgres instance (localhost:5432, username: "postgres", password: "postgres")
```bash
docker-compose up
```

Then run the following commands:
```bash
npm i
sequelize db:create
sequelize db:migrate
npm start
```