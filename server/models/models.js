const sequelize = require('../db');
const {DataTypes} = require('sequelize');

//модель "Пользователь"
const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	role: {type: DataTypes.STRING, defaultValue: "USER"}
});

//модель "Корзина"
const Basket = sequelize.define('basket', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

//модель "Девайс в Корзине"
const BasketDevice = sequelize.define('basket_device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

//модель Девайс
const Device = sequelize.define('device', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false},
	price: {type: DataTypes.INTEGER, allowNull: false},
	rating: {type: DataTypes.INTEGER, defaultValue: 0},
	img: {type: DataTypes.STRING, allowNull: false}
});

//модель Тип
const Type = sequelize.define('type', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

//модель Бренд
const Brand = sequelize.define('brand', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

//модель Рейтинг
const Rating = sequelize.define('rating', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.INTEGER, allowNull: false}
});

//модель Девайс Инфо
const DeviceInfo = sequelize.define('device_info', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes. STRING, allowNull: false},
	description: {type: DataTypes. STRING, allowNull: false},
});
