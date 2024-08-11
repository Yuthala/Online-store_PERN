//middleware, обрабатывающий ошибки. ИМПОРТИРУЕТСЯ В КОНЦЕ ВСЕХ ИМПОРТОВ

//импортируем класс ApiError
const ApiError = require('../error/ApiError');

//собственно middleware
//параметры: ошибка, запрос, ответ, функция next
module.exports = function (err, req, res, next) {
	//если класс ошибки - ApiError
	if(err instanceof ApiError) {
		//возвращаем на клиент статус кода, который получаем из ошибки, 
		//и соответствующее этой ошибке сообщение (варианты заданы в файле ApiError)
		return res.status(err.status).json({message: err.message})
	}
	//если ошибка не является instance ApiError, возвращаем ошибку 500 
	return res.status(500).json({message: "Непредвиденная ошибка"})
}