class ApiError extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}
	//статические функции (можно вызызвать без создания объекта, обращаться напрямую к классу и вызыввать ту или иную функцию)
	//первый парамерт - статус код. Второй параметр - сообщение, которое будем получать аргументом
	//возвращаем объект новый объект

	//код 404
	static badRequest(message) {
		return new ApiError(404, message)
	}
	//код 500
	static internal(message) {
		return new ApiError(500, message)
	}
	//код 403
	static forbidden(message) {
		return new ApiError(403, message)
	}
}

module.exports = ApiError;