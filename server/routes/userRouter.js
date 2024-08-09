const Router = require('express');
const router = new Router();

//метод для регистрации
router.post('/registration',);
//метод для авторизации
router.post('/login',);
//метод для проверки, авторизован ли пользователь (по JWT токену)
router.get('/auth',);
// //проверка, что GET работает
// router.get('/auth', (req, res) => {
// 	res.json({message: 'ALL WORKING!'})
// })


module.exports = router;