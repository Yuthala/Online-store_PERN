require('dotenv').config();

const express = require('express');

const sequelize = require ('./db');

const PORT = 80;

const app = express();

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

