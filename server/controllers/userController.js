class UserController {
	//функция регистрации пользователя
	async registration(req, res) {

	}
	//функция авторизации пользователя
	async login(req, res) {

	}
	//функция проверки, авторизован ли пользователь
	async check(req, res) {
		
	}
}

//экспортируем новый объект, созданный из класса UserController
//импортировать в userRouter
module.exports = new UserController();