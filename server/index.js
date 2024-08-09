require('dotenv').config();

const express = require('express');

const sequelize = require ('./db');

const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index') //импорт основного роутера

const PORT = 80;

const app = express();
app.use(cors());
app.use(express.json());
//первый параметр - url, по которому роутер должен обрабатываться. Второй параметр - сам роутер
app.use('/api', router);

//проверка, что get запросы работают. Проверить в браузере localhost:80 или через Postman
// app.get('/', (req, res) => {
// 	res.status(200).json({message: 'WORKING!'})
// })

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync(); //функция сверяет состояние БД со схемой БД
		app.listen(PORT, () => console.log(`Server stared on port ${PORT}`))
	} catch (e) {
		console.log(e);
	}
};

start ();

