const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

//первым параметром передаем url, по которому отрабатывает метод
//вторым параметром передаем соответствующую функцию из класса usercontroller
//метод для регистрации
router.post('/registration', userController.registration);
//метод для авторизации
router.post('/login', userController.login);
//метод для проверки, авторизован ли пользователь (по JWT токену)
router.get('/auth', userController.check);
// //проверка, что GET работает
// router.get('/auth', (req, res) => {
// 	res.json({message: 'ALL WORKING!'})
// })


module.exports = router;