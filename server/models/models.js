const sequelize = require('../db');
const {DataTypes, INTEGER} = require('sequelize');


//описания моделей. Поля берем из диаграммы 
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

//связующая модель - таблица для связей "Many to Many"
//в таблице указывается какой бренд принадлежит какому типу и какой бренд связан с каким типом
const TypeBrand = sequelize.define('type_brand', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

//связи между моделями. Типы связей берем из диаграммы
//указываем модель (User), тип связи (hasOne или hasMany), 
//и модель, с которой устанавливаем (Basket)
//второй строкой указываем через ключевое слово belongsTo какой сущности принадлежит объект, с которым устанавливается связь
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

//связи Many to Many
//используется ключеваое слово belongsToMany
//требуется указать связующую модель - второй аргумент, в который помещается объект со связующей моделью с ключевым словом through
Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
	User,
	Basket,
	BasketDevice,
	Device,
	Type,
	Brand,
	Rating,
	TypeBrand,
	DeviceInfo
}
