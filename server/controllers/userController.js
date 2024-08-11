const ApiError = require ('../error/ApiError');

class UserController {
	//функция регистрации пользователя
	async registration(req, res) {

	}
	//функция авторизации пользователя
	async login(req, res) {

	}
	//функция проверки, авторизован ли пользователь
	async check(req, res, next) {
		//универсальный обработчик ошибки
		const {id} = req.query;
		// //проверка, что обработка ошибок работает
		// if(!id) {
		// 	return next(ApiError.badRequest('Не задан ID'))
		// }
		res.json(id);
	}
}

//экспортируем новый объект, созданный из класса UserController
//импортировать в userRouter
module.exports = new UserController();